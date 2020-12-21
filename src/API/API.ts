import axios from 'axios';

axios.defaults.baseURL = 'http://142.93.210.105:1122';

export const GetAllUsers = () => {
  return axios
    .get(`/api/v1/seller`)
    .then((response) => response)
    .catch((error) => error);
};
