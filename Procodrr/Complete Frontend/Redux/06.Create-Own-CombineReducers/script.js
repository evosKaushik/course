import { combineReducers, createStore } from "redux";
import { productsList } from "./productList";
import CartReducer, {
  CART_ADD_ITEM,
  CART_ITEM_DECREASE_QUANTITY,
} from "./reducers/cartReducer";
import ProductsReducer from "./reducers/productsReducer";
import WishListReducer from "./reducers/wishListReducer";

const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishListReducer,
});
 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 7, quantity: 1 },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 7 },
});
