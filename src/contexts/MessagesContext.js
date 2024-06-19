import React, { createContext, useState } from 'react';

export const MessagesContext = createContext();

const MessagesContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;
