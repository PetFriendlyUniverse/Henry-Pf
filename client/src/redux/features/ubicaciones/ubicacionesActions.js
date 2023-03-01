import axios from "axios";

import {
  getLocalidades,
  getProvincias,
  getProvinciasByID,
  getLocalidesById,
} from "./ubicacionesSlice";

const getLocalidadesAsync = () => async (dispatch) => {
  const { data } = await axios.get(`/localidades`);
  return dispatch(getLocalidades(data));
};

const getPronvinciasAsync = () => async (dispatch) => {
  const { data } = await axios.get(`/provincias`);
  return dispatch(getProvincias(data));
};

export { getPronvinciasAsync, getLocalidadesAsync };
