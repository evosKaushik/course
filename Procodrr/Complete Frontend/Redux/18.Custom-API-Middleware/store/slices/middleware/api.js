export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  const BASE_URL = "https://fakestoreapi.com";
  if (action.type === "api/makeCall") {
    next(action)
    const { url, onSuccess } = action.payload;
    fetch(`${BASE_URL}${url}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
            type: onSuccess,
            payload: data
        });
      })
      .catch((error) => console.error(error));
  } else {
    next(action);
  }
};
