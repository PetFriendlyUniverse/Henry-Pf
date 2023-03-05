import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPagesDaycare: 1,
  totalPagesWalker: 1,
  currentPageDaycare: 1,
  currentPageWalker: 1,
  daycaresPerPage: 10,
  walkersPerPage: 10,
  walkers: [],
  walkerId: [],
  daycares: [],
  daycareId: [],
};

export const Services = createSlice({
  name: "Services",
  initialState,
  reducers: {
    setCurrentPageDaycare: (state, { payload }) => {
      state.currentPageDaycare = payload;
    },
    setCurrentPageWalker: (state, { payload }) => {
      state.currentPageWalker = payload;
    },
    getAllWalkers: (state, { payload }) => {
      state.walkers = payload.walkersList;
      state.totalPagesWalker = payload.quantity;
    },
    getWalkerByID: (state, { payload }) => {
      state.walkerId = payload;
    },
    getAllDaycares: (state, { payload }) => {
      state.daycares = payload.daycareList;
      state.totalPagesDaycare = payload.quantity;
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
  setCurrentPageDaycare,
  setCurrentPageWalker,
} = Services.actions;

export default Services.reducer;
