import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersFiltered: [],
};

export const Filters = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    getUsersFiltered: (state, { payload }) => {
      state.usersFiltered = payload;
    },
    deleteUser: (state, { payload }) => {
      state.usersFiltered = payload;
    },
    deleteStore: (state, { payload }) => {
      state.usersFiltered = payload;
    },
    deleteWalker: (state, { payload }) => {
      state.usersFiltered = payload;
    },
    deleteDaycare: (state, { payload }) => {
      state.usersFiltered = payload;
    },
  },
});

export const {
  getUsersFiltered,
  deleteUser,
  deleteStore,
  deleteWalker,
  deleteDaycare,
} = Filters.actions;
export default Filters.reducer;
