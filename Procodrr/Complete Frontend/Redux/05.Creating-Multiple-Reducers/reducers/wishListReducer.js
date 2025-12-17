export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

const WishListReducer = (state = [], action) => {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishList) => wishList.productId !== action.payload.productId
      );
    default:
      return state;
  }
};

export default WishListReducer;
