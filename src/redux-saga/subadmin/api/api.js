import axios from "axios";
import {
  BASE_URL,
  DELETE_SUBADMIN,
  GET_SUBADMIN,
  POST_SUBADMIN,
} from "../../constant";

// GET SUBADMIN

export const getSubadmin = () => {
  return axios
    .get(BASE_URL + GET_SUBADMIN)
    .then((res) => {
      const data = res.data.data;
      const status = res.status;
      // console.log(data);
      return { data, status };
    })
    .catch((err) => console.log(err));
};

// POST SUBADMIN

export const postSubadmin = (action) => {
    console.log(action);
  return axios
    .post(BASE_URL + POST_SUBADMIN, action.paylod)
    .then((res) => {
      const data = action.paylod;
      const status = res.status;
      console.log(res);
      return { data, status };
    })
    .catch((err) => console.log(err));
};

// DELETE SUBADMIN

export const deleteSubadmin = (action) => {
  return axios
    .delete(BASE_URL + DELETE_SUBADMIN + action.paylod)
    .then((res) => {
      const data = action.paylod;
      const status = res.status;
      // console.log(data);
      return { data, status };
    })
    .catch((err) => console.log(err));
};
