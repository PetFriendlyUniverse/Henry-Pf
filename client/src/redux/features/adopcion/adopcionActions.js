import {
  getAllAdopciones,
  deletedAdopcion,
  getFilters,
  getFilters,
  getAdopciones,
  getAdopcionById,
} from "./adopcionSlice";

import axios from "axios";
import { queryMarker } from "./helpers/queryMaker";

const getAdopcionesApi =
  (adopcionPerPage, currentPage, filters) => async (dispatch) => {
    const query = queryMarker(adopcionPerPage, currentPage, filters);
    const { data } = await axios.get(`/adopcion${query}/blog`);
    return dispatch(getAdopciones(data));
  };

const getFiltersApi = () => async (dispatch) => {
  const { data } = await axios.get("adopcion/blog/filters");
  return dispatch(getFilters(data));
};

const getAdopcionesIdApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/adopcion/blog/${id}`);
  return dispatch(getAdopcionById(data));
};

const deletedAdopcionIdApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/adopcion/blog/${id}`);
  return dispatch(deletedAdopcion(data));
};

const getAllAdopcionesApi = () => async (dispatch) => {
  const { data } = await axios.get("/adopcion");
  return dispatch(getAllAdopciones(data));
};

export {
  getAdopcionesApi,
  getFiltersApi,
  getAdopcionesIdApi,
  deletedAdopcionIdApi,
  getAllAdopcionesApi,
};
