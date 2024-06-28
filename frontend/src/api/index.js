import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, please log in');
    }
    return Promise.reject(error);
  }
);

export const fetchRadioHeads = (config) => API.get('/radioheads', config);
export const fetchProfile = (config) => API.get('/users/profile', config);
export const updateProfile = (profileData, config) => API.put('/users/profile', profileData, config);
export const login = (formData, config) => API.post('/auth/login', formData, config);
export const register = (formData, config) => API.post('/auth/register', formData, config);

export default API;
