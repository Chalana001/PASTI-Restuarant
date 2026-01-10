import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import "../css/FoodDetailsPage.css";

const fetchMenu = async () => {
  const res = await fetch("/menu.json");
  return res.json();
};

const FoodDetailsPage = () => {
  const { foodId } = useParams();
  const [food, setFood] = useState(null);
  const [similarFoods, setSimilarFoods] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenu().then((data) => {
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

      if (foundFood?.prices?.length === 1) {
        setSelectedPrice(foundFood.prices[0]); // ✅ auto select
      }

      if (foundCategory) {
        setSimilarFoods(
          foundCategory.foods.filter((fd) => fd.id !== foodId)
        );
      }
    });
  }, [foodId]);

  if (!food) return <div className="food-details-loading">Loading...</div>;

  // ✅ WhatsApp handler
  const handleBuy = () => {
    if (!selectedPrice) return;

    const message = `Order Item: ${food.name}
Size: ${selectedPrice.label}
Price: LKR ${selectedPrice.value}`;

    const phone = "0771168145";
    const url = `https://wa.me/94${phone.substring(
      1
    )}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="food-details-page">
      <div className="food-details-container">
        <img
          src={food.image}
          alt={food.name}
          className="food-details-img"
        />

        <div className="food-details-info">
          <h2 className="food-details-title">{food.name}</h2>

          <p className="food-details-short">{food.shortDescription}</p>
          <p className="food-details-desc">{food.description}</p>
          <div className="bottom-actions">
            {/* ✅ PRICE SELECTION */}
            <div className="food-details-prices">
              {food.prices.map((p) => (
                <label key={p.label} className="price-option">
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice?.label === p.label}
                    onChange={() => setSelectedPrice(p)}
                  />
                  <span>
                    {p.label} – LKR {p.value}
                  </span>
                </label>
              ))}
            </div>

            {/* ✅ BUY BUTTON */}
            <button
              className="buy-btn"
              disabled={!selectedPrice}
              onClick={handleBuy}
            >
              Buy on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* ✅ SIMILAR FOODS */}
      <section className="similar-foods-section">
        <h3>Similar Foods</h3>
        <div className="foods-grid">
          {similarFoods.map((fd) => (
            <FoodCard
              key={fd.id}
              food={fd}
              variant="list"
              onClick={() => navigate(`/menu/${fd.id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodDetailsPage;





// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import FoodCard from "../components/FoodCard";
// import "../App.css";

// const fetchMenu = async () => {
//   const res = await fetch("/menu.json");
//   return res.json();
// };

// const FoodDetailsPage = () => {
//   const { foodId } = useParams();
//   const [menu, setMenu] = useState({ categories: [] });
//   const [food, setFood] = useState(null);
//   const [similarFoods, setSimilarFoods] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchMenu().then((data) => {
//       setMenu(data);
//       let foundFood = null;
//       let foundCategory = null;
//       for (const cat of data.categories) {
//         const f = cat.foods.find((fd) => fd.id === foodId);
//         if (f) {
//           foundFood = f;
//           foundCategory = cat;
//           break;
//         }
//       }
//       setFood(foundFood);
//       if (foundCategory) {
//         setSimilarFoods(
//           foundCategory.foods.filter((fd) => fd.id !== foodId)
//         );
//       }
//     });
//   }, [foodId]);

//   if (!food) return <div className="food-details-loading">Loading...</div>;

//   return (
//     <main className="food-details-page">
//       <div className="food-details-container">
//         <img src={food.image} alt={food.name} className="food-details-img" />
//         <div className="food-details-info">
//           <h2 className="food-details-title">{food.name}</h2>
//           <div className="food-details-price">LKR {food.price}</div>
//           <p className="food-details-short">{food.shortDescription}</p>
//           <p className="food-details-desc">{food.description}</p>
//         </div>
//       </div>
//       <section className="similar-foods-section">
//         <h3>Similar Foods</h3>
//         <div className="foods-grid">
//           {similarFoods.map((fd) => (
//             <FoodCard
//               key={fd.id}
//               food={fd}
//               onClick={() => navigate(`/menu/${fd.id}`)}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default FoodDetailsPage;
