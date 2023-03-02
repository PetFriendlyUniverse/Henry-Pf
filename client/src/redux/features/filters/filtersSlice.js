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
  },
});

export const { getUsersFiltered } = Filters.actions;
export default Filters.reducer;
