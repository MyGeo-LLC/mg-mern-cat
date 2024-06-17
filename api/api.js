import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export const login = (credentials) => api.post('/api/auth/login', credentials);
export const logout = () => api.post('/api/auth/logout');
export const resetPassword = (email) => api.post('/api/auth/reset-password', { email });

export const getUsers = () => api.get('/api/users');
export const addUser = (user) => api.post('/api/users', user);
export const modifyUser = (id, user) => api.put(`/api/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/api/users/${id}`);

export default api;
