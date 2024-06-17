import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

const PermissionsContext = createContext();

const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await api.getPermissions();
        setPermissions(response.data);
      } catch (error) {
        console.error('Failed to fetch permissions', error);
      }
    };
    fetchPermissions();
  }, []);

  return (
    <PermissionsContext.Provider value={{ permissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsContext, PermissionsProvider };
