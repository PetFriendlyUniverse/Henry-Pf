import axios from "axios";
import {
  getAllUsers,
  getUsersFiltered,
  deleteUser,
  deleteStore,
  deleteWalker,
  deleteDaycare,
  approvedUser,
  approvedStore,
  approvedWalker,
  approvedDaycare,
} from "./filtersSlice";

const getUsers = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/list`);
  return dispatch(getAllUsers(data));
};

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

const approvedUserApi = (id) => async (dispatch) => {
  const { data } = await axios.put(`user/confirm/${id}`);
  return dispatch(approvedUser(data));
};

const approvedStoreByUser = (id) => async (dispatch) => {
  const { data } = await axios.put(`store/confirm/${id}`);
  return dispatch(approvedStore(data));
};

const approvedDaycareByUser = (id) => async (dispatch) => {
  const { data } = await axios.put(`daycare/confirm/${id}`);
  return dispatch(approvedDaycare(data));
};

const approvedWalkerByUser = (id) => async (dispatch) => {
  const { data } = await axios.put(`walker/confirm/${id}`);
  return dispatch(approvedWalker(data));
};

export {
  getUsers,
  getUsersFilter,
  deleteUserApi,
  deleteStoreByUser,
  deleteDaycareByUser,
  deleteWalkerByUser,
  approvedUserApi,
  approvedStoreByUser,
  approvedDaycareByUser,
  approvedWalkerByUser,
};
