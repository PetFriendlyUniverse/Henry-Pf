//No sabemos si vamos a utilizar todo este codigo

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: {},
  userStoreId: {},
  userWalkerId: {},
  userDaycareId: {},
  userInvoicesId: [],
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
    setReviewSent: (state, { payload }) => {
      console.log("slice", state.userInvoicesId);
      console.log("slice", payload);
      state.userInvoicesId = state.userInvoicesId.map((inv) => {
        if (inv.invoiceId == payload.invoiceId) {
          const newInv = {
            ...inv,
            products: inv.products.map((prod) => {
              return prod.id == payload.productId
                ? { ...prod, setReviewSent: true }
                : prod;
            }),
          };
          return newInv;
        }
        return inv;
      });
    },
  },
});

export const {
  getUser,
  getStore,
  getWalker,
  getDaycare,
  getUserInvoices,
  setReviewSent,
} = User.actions;
export default User.reducer;
