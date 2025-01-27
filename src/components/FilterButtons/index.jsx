import React from "react";
import "./index.css";

function FilterButtons({ category, onFilter }) {
  const categories = ["all", "Men's Clothing", "Women's Clothing", "Electronics", "Jewelery"];

  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => onFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
