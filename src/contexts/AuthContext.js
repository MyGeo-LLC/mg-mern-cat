import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../api/api';

export const AuthContext = createContext();

const AuthContextProviderWrapper = ({ children }) => {
  const navigate = useNavigate();
  return <AuthContextProvider navigate={navigate}>{children}</AuthContextProvider>;
};

const AuthContextProvider = ({ children, navigate }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const login = async (email, password) => {
    try {
      const { data } = await api.login({ email, password });
      setUser(data);
      localStorage.setItem('profile', JSON.stringify(data));
      navigate('/dashboard'); // Redirect after login
      return true;
    } catch (error) {
      console.error('Failed to login:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('profile');
    navigate('/login'); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProviderWrapper;
