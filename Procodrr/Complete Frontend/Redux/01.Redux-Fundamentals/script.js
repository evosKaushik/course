import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "kaushik",
  age: 14,
};

function reducer(state = initialState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }
  return state;
}

const store = createStore(reducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "post/decrement" });
store.dispatch({ type: "post/increment" });
store.dispatch({ type: "post/incrementBy", payload: 15 });
