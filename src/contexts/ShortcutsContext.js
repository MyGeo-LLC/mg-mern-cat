import React, { createContext, useState } from 'react';

export const ShortcutsContext = createContext();

const ShortcutsContextProvider = ({ children }) => {
  const [shortcuts, setShortcuts] = useState([]);

  return (
    <ShortcutsContext.Provider value={{ shortcuts, setShortcuts }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export default ShortcutsContextProvider;
