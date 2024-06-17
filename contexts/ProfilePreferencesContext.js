import React, { createContext, useState } from 'react';

export const ProfilePreferencesContext = createContext();

export const ProfilePreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    dpi: 96,
    resolution: { width: 1920, height: 1080 },
  });

  return (
    <ProfilePreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </ProfilePreferencesContext.Provider>
  );
};
