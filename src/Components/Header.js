import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../Pages/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleSearch = () => {
    // Navigate to a search results page or fetch data from an API
    // For example, navigate to a search results page:
    navigate(`/search?query=${searchQuery}`);
  };


  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo PNG"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
