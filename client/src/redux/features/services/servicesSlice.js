import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPages: 1,
  currentPage: 1,
  dayCaresPerPage: 5,
  walkersPerPage: 5,
  walkers: [],
  walkerId: [],
  dayCares: [],
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
      state.dayCares = payload;
      state.totalPages = payload.paginated[1];
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
