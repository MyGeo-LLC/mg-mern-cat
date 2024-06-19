import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { useContext } from 'react';

const useProfilePreferences = () => {
  return useContext(ProfilePreferencesContext);
};

export default useProfilePreferences;
