import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log('this is the basket', basket);
  // state hook is use for pull or data layer dimste meqebeya
  //dispatch hook is use for push to data layer dimste masemat
let action={
  type: "ADD_TO_BASKET",
  item: {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  },
}
  const addToBasket = () => {
    dispatch(action);
  };
  return (
    <div className="product">
      <p>{title}</p>
      <div className="product__info">
        <small>$</small>
        <strong>{price}</strong>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  );
}

export default Product;
