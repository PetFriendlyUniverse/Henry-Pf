import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  stores: {},
  walkers: {},
  daycares: {},
  products: {},
};

export const Stats = createSlice({
  name: "Stats",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      //todavia no se usa
      state.users = payload;
    },
    getStores: (state, { payload }) => {
      //todavia no se usa
      state.stores = payload;
    },
    getWalkers: (state, { payload }) => {
      //todavia no se usa
      state.walkers = payload;
    },
    getDaycares: (state, { payload }) => {
      //todavia no se usa
      state.daycares = payload;
    },
    getProducts: (state, { payload }) => {
      //todavia no se usa
      state.products = payload;
    },
  },
});

export const { getUsers, getStores, getWalkers, getDaycares, getProducts } =
  Stats.actions;
export default Stats.reducer;
