import { useSelector } from "react-redux";
import "./App.css";
import Product from "./components/Product";

const App = () => {
  const productsList = useSelector((state) => state.products);
  return (
    <>
      <center>
        <h1>Products</h1>
      </center>
      <div className="products-container">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            title={title}
            rating={rating?.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    </>
  );
};

export default App;
