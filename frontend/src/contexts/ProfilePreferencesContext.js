import React, { createContext, useContext, useState } from 'react';

const ProfilePreferencesContext = createContext();

export const ProfilePreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({ color: '#000' });

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <ProfilePreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </ProfilePreferencesContext.Provider>
  );
};

export const useProfilePreferences = () => {
  return useContext(ProfilePreferencesContext);
};
