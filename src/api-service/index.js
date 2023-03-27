import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'content-type': 'application/json'
  },
});

export default apiClient;
