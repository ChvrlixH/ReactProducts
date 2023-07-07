import React, { useState } from "react";
import Card from "./Card";

const List = () => {
  let products = [
    {
      id: 1,
      name: "X-17",
      price: 2500,
      model: "Rog",
      brand: "Asus",
    },
    {
      id: 2,
      name: "A15",
      price: 2000,
      model: "Tuf",
      brand: "Asus",
    },
    {
      id: 3,
      name: "Supreme",
      price: 1700,
      model: "Strix",
      brand: "Acer",
    },
    {
      id: 4,
      name: "Asiman",
      price: 12,
      model: "Kasib",
      brand: "Naxcivan",
    },
    {
      id: 5,
      name: "C4",
      price: 3600,
      model: "Hero",
      brand: "Alienware",
    },
  ];
  return (
    <>
      <div className="pro-card">
        {products.map((product, index) => {
          return (
            <Card
              name={product.name}
              model={product.model}
              brand={product.brand}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
