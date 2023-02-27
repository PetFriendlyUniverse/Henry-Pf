//No sabemos si vamos a utilizar todo este codigo

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: {},
  userStoreId: {},
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
  },
});

export const { getUser, getStore } = User.actions;
export default User.reducer;
