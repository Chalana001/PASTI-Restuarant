import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import FoodCard from "../components/FoodCard";
import "../css/MenuPage.css";
import { useNavigate } from "react-router-dom";

const fetchMenu = async () => {
  const res = await fetch("/menu.json");
  return res.json();
};

const MenuPage = () => {
  const [menu, setMenu] = useState({ categories: [] });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [tableId, setTableId] = useState(""); // ✅ NEW
  const navigate = useNavigate();

  // ✅ Load menu json
  useEffect(() => {
    fetchMenu().then(setMenu);
  }, []);

  // ✅ TABLE QR LOGIC
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("t"); // ?t=05

    const TWO_HOURS = 2 * 60 * 60 * 1000;

    if (t) {
      // Save table session
      const data = { id: t, savedAt: Date.now() };
      localStorage.setItem("tableSession", JSON.stringify(data));
      setTableId(t);
      return;
    }

    // Read saved session
    const raw = localStorage.getItem("tableSession");
    if (!raw) return;

    const data = JSON.parse(raw);

    // Expire after 2 hours
    if (Date.now() - data.savedAt > TWO_HOURS) {
      localStorage.removeItem("tableSession");
      return;
    }

    setTableId(data.id);
  }, []);

  // Flatten all foods with category info
  const allFoods = menu.categories.flatMap((cat) =>
    cat.foods.map((food) => ({
      ...food,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );

  // Filter by category
  const filteredFoods =
    category === "all"
      ? allFoods
      : allFoods.filter((food) => food.categoryId === category);

  // Filter by search
  const searchedFoods = filteredFoods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category for display
  const foodsByCategory = menu.categories
    .filter((cat) => category === "all" || cat.id === category)
    .map((cat) => ({
      ...cat,
      foods: cat.foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.foods.length > 0);

  return (
    <main className="menu-page">
      <h2 className="menu-title">Our Foods</h2>

      {/* ✅ TABLE BANNER */}
      {tableId && (
        <div className="table-banner">
          ✅ Ordering from <b>Table {tableId}</b>
          <button
            className="clear-table"
            onClick={() => {
              localStorage.removeItem("tableSession");
              setTableId("");
            }}
          >
            Change
          </button>
        </div>
      )}

      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter
        categories={menu.categories}
        selected={category}
        onSelect={setCategory}
      />

      <div className="menu-list">
        {foodsByCategory.length === 0 && (
          <div className="no-foods">No foods found.</div>
        )}

        {foodsByCategory.map((cat) => (
          <section key={cat.id} className="menu-category">
            <h3 className="category-title">{cat.name}</h3>
            <div className="foods-grid">
              {cat.foods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onClick={() => navigate(`/menu/${food.id}`)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MenuPage;