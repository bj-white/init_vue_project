import axios from 'axios';

const request = axios.create({
  baseURL: ''
});

request.interceptors.request.use(config => {
  return config;
});

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
