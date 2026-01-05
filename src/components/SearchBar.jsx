import React from "react";
import "../App.css";

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search foods..."
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Search foods"
    />
  </div>
);

export default SearchBar;
