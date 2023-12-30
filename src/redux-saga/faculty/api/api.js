import axios from "axios";
import { BASE_URL, DELETE_FACULTY, GET_FACULTY, POST_FACULTY } from "../../constant";

// GET FACULTY

export const getFaculty = () => {
    return axios
      .get(BASE_URL + GET_FACULTY)
      .then((res) => {
        const data = res.data;
        const status = res.status;
        // console.log(data);
        return { data, status };
      })
      .catch((err) => console.log(err));
  };
  
  // POST FACULTY
  
  export const postFaculty = (action) => {
    return axios.post(BASE_URL + POST_FACULTY,action.paylod).then((res) => {
        const data = res.data;
        const status = res.status;
        // console.log(data);
        return { data, status };
      }).catch((err) => console.log(err));
  };
  
  // DELETE FACULTY
  
  export const deleteFaculty = (action) => {
    return axios.delete(BASE_URL + DELETE_FACULTY+action.paylod).then((res) => {
        const data = action.paylod;
        const status = res.status;
        // console.log(data);
        return { data, status };
      })
      .catch((err) => console.log(err));
  };