import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const Products = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = Products.actions;

export default Products.reducer;
