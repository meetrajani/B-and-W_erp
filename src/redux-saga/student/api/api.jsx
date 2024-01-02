import axios from "axios";
import { BASE_URL, GET_STUDENT, POST_STUDENT } from "../../constant";

// GET STUDENT

export const getStudent = () => {
    return axios.get(BASE_URL + GET_STUDENT).then((res) => {
        const data = res.data.data;
        const status = res.status;
        // console.log(data);
        return { data, status };
      })
      .catch((err) => console.log(err));
};

// POST STUDENT

export const postStudent = (action) => {
    return axios.post(BASE_URL + POST_STUDENT,action.paylod).then((res) => {
        const data = res.data.data.student;
        const status = res.status;
        // console.log(res);
        return { data, status };
      })
      .catch((err) => console.log(err));
};