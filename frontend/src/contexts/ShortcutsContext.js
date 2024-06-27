import React, { createContext, useContext, useEffect } from 'react';

const ShortcutsContext = createContext();

export const useShortcutKeys = () => useContext(ShortcutsContext);

const ShortcutsProvider = ({ children }) => {
  const handleShortcut = (callback) => {
    useEffect(() => {
      const handleKeyDown = (event) => {
        callback(event.key);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [callback]);
  };

  return (
    <ShortcutsContext.Provider value={{ handleShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsProvider;
