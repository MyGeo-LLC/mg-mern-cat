import React, { createContext, useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    // Mock login function
    if (email === 'admin@example.com' && password === 'password') {
      setUser({ email, role: 'admin' });
      navigate('/dashboard'); // Redirect after login
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login'); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
export default AuthProvider;
