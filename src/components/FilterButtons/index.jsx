import React from "react";
import "./index.css";

function FilterButtons({ category, onFilter }) {
  const categories = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"]; 

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
