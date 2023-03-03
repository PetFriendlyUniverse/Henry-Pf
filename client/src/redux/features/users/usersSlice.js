//No sabemos si vamos a utilizar todo este codigo

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: {},
  userStoreId: {},
  userWalkerId: {},
  userDaycareId: {},
  userInvoicesId: {}, // {  id key factura  :  [{}}] }
};

export const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.userId = payload;
    },
    getStore: (state, { payload }) => {
      state.userStoreId = payload;
    },
    getWalker: (state, { payload }) => {
      state.userWalkerId = payload;
    },
    getDaycare: (state, { payload }) => {
      state.userDaycareId = payload;
    },
    getUserInvoices: (state, { payload }) => {
      state.userInvoicesId = payload;
    },
  },
});

export const { getUser, getStore, getWalker, getDaycare, getUserInvoices } =
  User.actions;
export default User.reducer;
