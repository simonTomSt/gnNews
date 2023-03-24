import Axios from 'axios/index';

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY,
  },
});
