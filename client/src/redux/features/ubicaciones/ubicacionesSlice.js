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
    },
    getProvincias: (state, { payload }) => {
      state.provincias = payload;
    },
  },
});

export const {
  getLocalidades,
  getProvincias,
  getProvinciasByID,
  getLocalidesById,
} = Ubicaciones.actions;

export default Ubicaciones.reducer;
