import React, { createContext, useState } from 'react';

export const PermissionsContext = createContext();

const PermissionsContextProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  return (
    <PermissionsContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};

export default PermissionsContextProvider;
