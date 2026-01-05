import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import "../App.css";

const fetchMenu = async () => {
  const res = await fetch("/menu.json");
  return res.json();
};

const FoodDetailsPage = () => {
  const { foodId } = useParams();
  const [menu, setMenu] = useState({ categories: [] });
  const [food, setFood] = useState(null);
  const [similarFoods, setSimilarFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenu().then((data) => {
      setMenu(data);
      let foundFood = null;
      let foundCategory = null;
      for (const cat of data.categories) {
        const f = cat.foods.find((fd) => fd.id === foodId);
        if (f) {
          foundFood = f;
          foundCategory = cat;
          break;
        }
      }
      setFood(foundFood);
      if (foundCategory) {
        setSimilarFoods(
          foundCategory.foods.filter((fd) => fd.id !== foodId)
        );
      }
    });
  }, [foodId]);

  if (!food) return <div className="food-details-loading">Loading...</div>;

  return (
    <main className="food-details-page">
      <div className="food-details-container">
        <img src={food.image} alt={food.name} className="food-details-img" />
        <div className="food-details-info">
          <h2 className="food-details-title">{food.name}</h2>
          <div className="food-details-price">LKR {food.price}</div>
          <p className="food-details-short">{food.shortDescription}</p>
          <p className="food-details-desc">{food.description}</p>
        </div>
      </div>
      <section className="similar-foods-section">
        <h3>Similar Foods</h3>
        <div className="foods-grid">
          {similarFoods.map((fd) => (
            <FoodCard
              key={fd.id}
              food={fd}
              onClick={() => navigate(`/menu/${fd.id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodDetailsPage;
