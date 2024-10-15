import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || 'https://restcountries.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;