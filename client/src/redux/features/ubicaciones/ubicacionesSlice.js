import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localidades: [],
  provincias: [],
};

export const Ubicaciones = createSlice({
  name: "Ubicaciones",
  initialState,
  reducers: {
    getLocalidades: (state, { payload }) => {
      state.localidades = payload;
      console.log(payload);
    },
    getProvincias: (state, { payload }) => {
      state.provincias = payload;
    },
  },
  getProvinciasByID: (state, { payload }) => {
    state.provinciasById = state.provincias.filter((p) => p.id == payload);
  },
  getLocalidesById: (state, { payload }) => {
    state.localidadesById = state.localidades.filter((p) => p.id == payload);
  },
});

export const {
  getLocalidades,
  getProvincias,
  getProvinciasByID,
  getLocalidesById,
} = Ubicaciones.actions;

export default Ubicaciones.reducer;
