import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPages: 1,
  currentPage: 1,
  dayCaresPerPage: 15,
  walkersPerPage: 15,
  walkers: [],
  walkerId: [],
  dayCares: [],
  daycareId: [],
};

export const Services = createSlice({
  name: "Services",
  initialState,
  reducers: {
    getAllWalkers: (state, { payload }) => {
      state.walkers = payload;
    },
    getWalkerByID: (state, { payload }) => {
      state.walkerId = payload;
    },
    getAllDaycares: (state, { payload }) => {
      state.dayCares = payload;
    },
    getDaycareByID: (state, { payload }) => {
      state.daycareId = payload;
    },
  },
});
export const { getAllWalkers, getWalkerByID, getAllDaycares, getDaycareByID } =
  Services.actions;

export default Services.reducer;
