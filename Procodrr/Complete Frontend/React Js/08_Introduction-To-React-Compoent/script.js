import { createRoot } from "react-dom/client";

import "./style.css";
import React from "react";

function CreateCard(props) {
  const { title, brand, price, thumbnail } = props;
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <div className="cardContainer">
        <h2>{title}</h2>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="cardWrapper">
        {data.products.map((products) => {
          return (
            <CreateCard
              title={products.title}
              thumbnail={products.thumbnail}
              price={products.price}
              key={products.id}
            />
          );
        })}
      </div>
    );
  })
  .catch((err) => console.log(err));
