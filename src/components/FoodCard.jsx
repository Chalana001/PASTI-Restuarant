import React from "react";
import "../css/FoodCard.css";

const FoodCard = ({ food, variant = "list", onClick }) => {
  const mainPrice = food.prices?.[0]; // Medium or Regular

  return (
    <div
      className="food-card"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <img
        src={food.image}
        alt={food.name}
        className="food-card-img" loading="lazy"
      />

      <div className="food-card-body">
        <h3 className="food-card-title">{food.name}</h3>
        <p className="food-card-desc">{food.shortDescription}</p>

        {/* ✅ LIST / SEARCH VIEW */}
        {variant === "list" && mainPrice && (
          <div className="food-card-price">
            LKR {mainPrice.value}/=
            {food.prices.length > 1 && (
              <span className="from-text">
                {" "} ( {mainPrice.label} )
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
