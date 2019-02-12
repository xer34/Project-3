import axios from "axios";
export default {
  getUser: () => {
    return axios.get(process.env.REACT_APP_API_URL + "/api/user");
  },
  getOneUser: id => {
    return axios.get(process.env.REACT_APP_API_URL + "/api/user/" + id);
  },
  deleteUser: id => {
    return axios.delete(process.env.REACT_APP_API_URL + "/api/user/" + id);
  },
  saveUser: userData => {
    return axios.post(process.env.REACT_APP_API_URL + "/api/user", userData);
  }
};
