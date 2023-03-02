import axios from "axios";
import {
  getUsersFiltered,
  deleteUser,
  deleteStore,
  deleteWalker,
  deleteDaycare,
} from "./filtersSlice";

const getUsersFilter = (name, type) => async (dispatch) => {
  const { data } = await axios.get(
    `/dashboard/filterusers?name=${name}&type=${type}`
  );
  return dispatch(getUsersFiltered(data));
};

const deleteUserApi = (id) => async (dispatch) => {
  const { data } = await axios.delete(`user/${id}`);
  return dispatch(deleteUser(data));
};

const deleteStoreByUser = (id) => async (dispatch) => {
  const { data } = await axios.delete(`store/${id}`);
  return dispatch(deleteStore(data));
};

const deleteDaycareByUser = (id) => async (dispatch) => {
  const { data } = await axios.delete(`daycare/${id}`);
  return dispatch(deleteDaycare(data));
};

const deleteWalkerByUser = (id) => async (dispatch) => {
  const { data } = await axios.delete(`walker/${id}`);
  return dispatch(deleteWalker(data));
};

export {
  getUsersFilter,
  deleteUserApi,
  deleteStoreByUser,
  deleteDaycareByUser,
  deleteWalkerByUser,
};
