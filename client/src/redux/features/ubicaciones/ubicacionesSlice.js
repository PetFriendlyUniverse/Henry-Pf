import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localidades: [],
  provincias: [],
};

export const Localidades = createSlice({
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
