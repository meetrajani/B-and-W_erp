import axios from "axios";
import { BASE_URL, GET_STUDENT } from "../../constant";

export const getStudent = () => {
    return axios.get(BASE_URL + GET_STUDENT).then((res) => {
        const data = res.data.data;
        const status = res.status;
        // console.log(data);
        return { data, status };
      })
      .catch((err) => console.log(err));
  };