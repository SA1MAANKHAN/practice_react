import React from "react";

import "./categoryCard.styles.scss";

function CategoryCard({ imageUrl, category }) {
  return (
    <div className="categoryCard">
      <div className="category__itemImageContainer">
        <img src={imageUrl} alt="" className="category__itemImage" />
      </div>
      <h1 className="category__name">{category}</h1>
    </div>
  );
}

export default CategoryCard;
