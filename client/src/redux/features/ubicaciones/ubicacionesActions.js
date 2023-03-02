import axios from "axios";

import { getLocalidades, getProvincias } from "./ubicacionesSlice";

const getLocalidadesAsync = (provincia) => async (dispatch) => {
  const { data } = await axios.get(`/localidades?provincia=${provincia}`);
  return dispatch(getLocalidades(data));
};

const getPronvinciasAsync = () => async (dispatch) => {
  const { data } = await axios.get(`/provincias`);
  return dispatch(getProvincias(data));
};

export { getPronvinciasAsync, getLocalidadesAsync };
