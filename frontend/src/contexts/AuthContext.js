import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from './SnackbarContext';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const showSnackbar = useSnackbar();
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setUser(response.data);
      showSnackbar('Login successful', 'success');
      navigate('/dashboard');
    } catch (error) {
      showSnackbar(`Login failed: ${error.response?.data?.message || error.message}`, 'error');
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    showSnackbar('Logged out', 'info');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
