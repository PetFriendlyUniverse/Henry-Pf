import {
  getAdopciones,
  getAdopcionById,
  getAllInstagramUrl,
} from "./adopcionSlice";

import axios from "axios";

const getAdopcionesApi = (page, pq, province) => async (dispatch) => {
  if (province == null) {
    const { data } = await axios.get(`/adoption?page=${page}&pq=${pq}`);
    return dispatch(getAdopciones(data));
  } else {
    const { data } = await axios.get(
      `/adoption?page=${page}&pq=${pq}&province=${province}`
    );
    return dispatch(getAdopciones(data));
  }
};

const getAdopcionesIdApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/adoption/${id}`);
  return dispatch(getAdopcionById(data));
};

const getAllInstagramUrlByApi = () => async (dispatch) => {
  const { data } = await axios.get(`/adoption/instagram`);
  return dispatch(getAllInstagramUrl(data));
};

export { getAdopcionesApi, getAdopcionesIdApi, getAllInstagramUrlByApi };
