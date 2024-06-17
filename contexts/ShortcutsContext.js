import React, { createContext, useState, useEffect } from 'react';

const ShortcutsContext = createContext();

const ShortcutsProvider = ({ children }) => {
  const [shortcuts, setShortcuts] = useState({});

  const updateShortcut = (action, key) => {
    setShortcuts({ ...shortcuts, [action]: key });
  };

  useEffect(() => {
    const storedShortcuts = JSON.parse(localStorage.getItem('shortcuts'));
    if (storedShortcuts) setShortcuts(storedShortcuts);
  }, []);

  useEffect(() => {
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
  }, [shortcuts]);

  return (
    <ShortcutsContext.Provider value={{ shortcuts, updateShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export { ShortcutsContext, ShortcutsProvider };
