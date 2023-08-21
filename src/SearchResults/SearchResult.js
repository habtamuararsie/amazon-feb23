import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Product from "../Components/Product";
import sproducts from "../Components/SampleProducts"; 

function SearchResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  // Filter the products based on the search query
  const matchingProducts = Object.values(sproducts).filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleProductClick = () => {
    // Navigate to the checkout page directly
    navigate("/checkout");
  };

  return (
    <div className="searchResults">
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
          alt="Amazon logo PNG"
        />
      </Link>
      <h2>Search Results for "{query}"</h2>

      <div className="searchResults__products">
        {matchingProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            onProductClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;