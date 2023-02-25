import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeData: {},
  products: {},
};

export const Tiendas = createSlice({
  name: "Tiendas",
  initialState,
  reducers: {
    getStore: (state, { payload }) => {
      state.storeData = payload;
    },
    getProductsByStore: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { getStore, getProductsByStore } = Tiendas.actions;
export default Tiendas.reducer;
