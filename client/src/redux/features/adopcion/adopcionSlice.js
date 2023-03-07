import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adopcion: [],
  totalPages: 1,
  currentPage: 1,
  adopcionPerPage: 4,
  allFilters: [],
  setFilters: [],
  adopcionId: [],
};

export const Adopciones = createSlice({
  name: "Adopciones",
  initialState,
  reducers: {
    getAdopciones: (state, { payload }) => {
      state.adopcion = payload.adoptionList;
      state.totalPages = payload.quantity;
    },

    getFilters: (state, { payload }) => {
      state.allFilters = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setFilters: (state, { payload }) => {
      const newSetFilters = { ...state.setFilters };
      const { filter, value } = payload; //{filter:"Breed", value: "breed1"}
      if (value === "") {
        delete newSetFilters[filter];
      } else {
        if (Array.isArray(payload)) {
          payload.forEach((f) => (newSetFilters[f.filter] = f.value));
        } else {
          newSetFilters[filter] = value;
        }
      }
      state.setFilters = newSetFilters;
      state.currentPage = 1;
    },
    clearFilters: (state) => {
      state.setFilters = {};
      state.currentPage = 1;
    },

    getAdopcionById: (state, { payload }) => {
      state.adopcionId = payload;
    },
    clearAdopcionesId: (state) => {
      state.adopcionId = {};
    },
    deletedAdopcion: (state, { payload }) => {
      state.adopcionId = payload;
    },
    getAllAdopciones: (state, { payload }) => {
      state.adopcion = payload;
    },
  },
});

export const {
  getAllAdopciones,
  deletedAdopcion,
  clearAdopcionesId,
  setFilters,
  setCurrentPage,
  getFilters,
  getAdopciones,
  getAdopcionById,
} = Adopciones.actions;

export default Adopciones.reducer;
