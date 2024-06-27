import React, { createContext, useContext } from 'react';

import useShortcut from '../hooks/useShortcut';

const ShortcutsContext = createContext();

export const useShortcutKeys = () => useContext(ShortcutsContext);

const ShortcutsProvider = ({ children }) => {
  const handleShortcut = (callback) => {
    useShortcut(callback);
  };

  return (
    <ShortcutsContext.Provider value={{ handleShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsProvider;
