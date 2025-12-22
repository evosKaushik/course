import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: "",
    list: [],
  },
  reducers: {
    isLoading(state, _) {
      state.loading = true;
    },
    errorStatus(state, action) {
      state.loading = true;
      state.error = action.payload || "😔 Something went Wrong";
    },
    updateAllProducts(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { updateAllProducts, isLoading, errorStatus } = slice.actions;

export default slice.reducer;
