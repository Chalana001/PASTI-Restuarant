import React from "react";
import "../App.css";

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="category-filter">
    <button
      className={selected === "all" ? "active" : ""}
      onClick={() => onSelect("all")}
    >
      All
    </button>
    {categories.map((cat) => (
      <button
        key={cat.id}
        className={selected === cat.id ? "active" : ""}
        onClick={() => onSelect(cat.id)}
      >
        {cat.name}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
