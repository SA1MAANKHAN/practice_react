import React from "react";

import "./ProductCard.styles.scss";

const ProductCard = ({ imageUrl, name, price, rating }) => {
  return (
    <div className="productCard">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <span>⭐⭐⭐⭐</span>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
