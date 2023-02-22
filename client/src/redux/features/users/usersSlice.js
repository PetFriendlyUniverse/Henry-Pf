//No sabemos si vamos a utilizar todo este codigo

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: {},
};

export const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export const { getUser } = User.actions;
export default User.reducer;
