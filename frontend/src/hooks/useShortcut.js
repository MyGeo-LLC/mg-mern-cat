import { useEffect } from 'react';

const useShortcut = (callback) => {
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

export default useShortcut;
