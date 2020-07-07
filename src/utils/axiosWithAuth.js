import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: `https://dfink-gigapet.herokuapp.com/api/`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};