import React from "react";
import "../App.css";

const FoodCard = ({ food, onClick }) => (
  <div className="food-card" onClick={onClick} tabIndex={0} role="button">
    <img src={food.image} alt={food.name} className="food-card-img" />
    <div className="food-card-body">
      <h3 className="food-card-title">{food.name}</h3>
      <p className="food-card-desc">{food.shortDescription}</p>
      <div className="food-card-price">LKR {food.price}</div>
    </div>
  </div>
);

export default FoodCard;
