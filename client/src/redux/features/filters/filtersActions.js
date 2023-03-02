import axios from "axios";
import { getUsersFiltered } from "./filtersSlice";

const getUsersFilter = (name, type) => async (dispatch) => {
  const { data } = await axios.get(
    `/dashboard/filterusers?name=${name}&type=${type}`
  );
  return dispatch(getUsersFiltered(data));
};

export { getUsersFilter };
