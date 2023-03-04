import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allWalkers: [],
  walker: [],
  allDaycares: [],
  daycare: [],
};

export const Services = createSlice({
  name: "Services",
  initialState,
  reducers: {
    getAllWalkers: (state, { payload }) => {
      state.allWalkers = payload;
    },
    getWalkerByID: (state, { payload }) => {
      state.walker = payload;
    },
    getAllDaycares: (state, { payload }) => {
      state.allDaycares = payload;
    },
    getDaycareByID: (state, { payload }) => {
      state.daycare = payload;
    },
  },
});
export const { getAllWalkers, getWalkerByID, getAllDaycares, getDaycareByID } =
  Services.actions;

export default Services.reducer;
