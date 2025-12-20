import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

const users = [
  {
    name: "Kaushik",
    age: 26,
  },
  {
    name: "Ram",
    age: 18,
  },
  {
    name: "Adarsh",
    age: 16,
  },
];

// users[1].age = 20;

// console.log(users);

// const newUsers = users.map((user, i) => {
//   if (i === 1) {
//     return { ...user, age: 20 };
//   }
//   return user;
// });
