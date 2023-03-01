//No sabemos si vamos a utilizar todo este codigo

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: {},
  userStoreId: {},
  userWalkerId: {},
  userDaycareId: {},
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
  },
});

export const { getUser, getStore, getWalker, getDaycare } = User.actions;
export default User.reducer;
