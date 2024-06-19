import { PermissionsContext } from '../contexts/PermissionsContext';
import { useContext } from 'react';

const usePermissions = () => {
  return useContext(PermissionsContext);
};

export default usePermissions;
