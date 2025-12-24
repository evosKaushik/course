import { useSelector } from "../react-redux";
import Product from "../components/Product";
import {
  getAllProductsState,
  getErrorState,
  getLoadingState,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProductsState);
  const isLoading = useSelector(getLoadingState);
  const errorStatus = useSelector(getErrorState);
  // useSelector(console.log)
  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading....</h1>
  ) : (
    errorStatus || (
      <div className="products-container">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    )
  );
}
