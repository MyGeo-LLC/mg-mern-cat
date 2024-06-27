import axios from 'axios';
import { useSnackbar } from '../contexts/SnackbarContext';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized errors by redirecting to login page or showing a message
      useSnackbar().enqueueSnackbar('Unauthorized, please log in', { variant: 'error' });
      // Redirect to login page or take other appropriate actions
    }
    return Promise.reject(error);
  }
);

export default API;
