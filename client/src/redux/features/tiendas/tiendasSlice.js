import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeData: {},
  products: [],
  productById: {},
};

export const Tiendas = createSlice({
  name: "Tiendas",
  initialState,
  reducers: {
    getStore: (state, { payload }) => {
      //todavia no se usa
      state.storeData = payload;
    },
    getProductsByStore: (state, { payload }) => {
      state.products = payload;
    },
    getProductsFromStoreById: (state, { payload }) => {
      state.productById = state.products.filter((p) => p.id == payload);
    },
  },
});

export const { getStore, getProductsByStore, getProductsFromStoreById } =
  Tiendas.actions;
export default Tiendas.reducer;
