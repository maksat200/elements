import React from "react";
import "./index.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <d className="blue">{product.category}</d>
            <h2>{product.title}</h2>
    <p className="price">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
