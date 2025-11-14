import axios from 'axios';

export const API_ROUTES = {
  meditations: `meditations`,
};
export const http = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/',
  timeout: 10000,
});
