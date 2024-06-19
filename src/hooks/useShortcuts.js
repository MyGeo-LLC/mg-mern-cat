import { ShortcutsContext } from '../contexts/ShortcutsContext';
import { useContext } from 'react';

const useShortcuts = () => {
  return useContext(ShortcutsContext);
};

export default useShortcuts;
