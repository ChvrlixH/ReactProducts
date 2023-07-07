import React, { useState } from "react";

const Card = ({ name, model, brand, price }) => {
  const [bestSeller, setBestSeller] = useState(false);

  return (
    <div className="product-card">
      <div className="product-main">
        {bestSeller ? <span className="b-s">Bestseller</span> : ""}
        <p>Name: {name}</p>
        <p>Model: {model}</p>
        <p>Brand: {brand}</p>
        <p> Price: {price}$</p>
      </div>
      <button
        className="make-bs"
        onClick={() => {
          setBestSeller(!bestSeller);
        }}
      >
        {bestSeller ? (
          <span>Remove a bestseller</span>
        ) : (
          <span>Make a bestseller</span>
        )}
      </button>
    </div>
  );
};
export default Card;
