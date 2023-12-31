import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../Pages/StateProvider";
import { useNavigate } from 'react-router-dom'

function Subtotal() {
  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
                Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSepatator={true}
        prefix={'$'}
      />
      <button onClick={(e) => {user?navigate('/payment'):navigate('/login')}}> Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;
