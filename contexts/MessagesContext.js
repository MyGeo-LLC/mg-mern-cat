import React, { createContext, useState } from 'react';

const MessagesContext = createContext();

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const removeMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };
