import React, { createContext, useState } from 'react';

export const ProfilePreferencesContext = createContext();

const ProfilePreferencesContextProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    dpi: 150,
    resolution: { width: 1920, height: 1080 },
  });

  return (
    <ProfilePreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </ProfilePreferencesContext.Provider>
  );
};

export default ProfilePreferencesContextProvider;
