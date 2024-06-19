import { MessagesContext } from '../contexts/MessagesContext';
import { useContext } from 'react';

const useMessages = () => {
  return useContext(MessagesContext);
};

export default useMessages;
