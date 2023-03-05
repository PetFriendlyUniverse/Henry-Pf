import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPages: 1,
  currentPage: 1,
  daycaresPerPage: 15,
  walkersPerPage: 1,
  walkers: [],
  walkerId: [],
  daycares: [],
  daycareId: [],
};

export const Services = createSlice({
  name: "Services",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    getAllWalkers: (state, { payload }) => {
      state.walkers = payload;
    },
    getWalkerByID: (state, { payload }) => {
      state.walkerId = payload;
    },
    getAllDaycares: (state, { payload }) => {
      state.daycares = payload.daycareList;
      state.totalPages = payload.quantity;
    },
    getDaycareByID: (state, { payload }) => {
      state.daycareId = payload;
    },
  },
});
export const {
  getAllWalkers,
  getWalkerByID,
  getAllDaycares,
  getDaycareByID,
  setCurrentPage,
} = Services.actions;

export default Services.reducer;
