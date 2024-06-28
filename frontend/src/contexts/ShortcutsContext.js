import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ShortcutsContext = createContext();

export const useShortcutKeys = () => useContext(ShortcutsContext);

const ShortcutsProvider = ({ children }) => {
  const [shortcutHandlers, setShortcutHandlers] = useState([]);

  const registerShortcut = useCallback((callback) => {
    setShortcutHandlers((prevHandlers) => [...prevHandlers, callback]);
    return () => {
      setShortcutHandlers((prevHandlers) => prevHandlers.filter(handler => handler !== callback));
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      shortcutHandlers.forEach((callback) => callback(event.key));
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcutHandlers]);

  return (
    <ShortcutsContext.Provider value={{ registerShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsProvider;
