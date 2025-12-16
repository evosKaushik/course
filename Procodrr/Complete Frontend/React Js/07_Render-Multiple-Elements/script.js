import { createRoot } from "react-dom/client";

import "./style.css";

function createCard(key, title, brand, price, thumbnail) {
  return (
    <div className="card" key={key}>
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
    root.render(<div className="cardWrapper">{data.products.map((products) => {
      return createCard(
        products.id,
        products.title,
        products.brand,
        products.price,
        products.thumbnail
      );
    })}</div>);
  });
