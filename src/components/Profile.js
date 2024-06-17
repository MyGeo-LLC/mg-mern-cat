import React, { useContext } from 'react';
import { ProfilePreferencesContext } from '../../contexts/ProfilePreferencesContexttext';
import { Slider, Typography } from '@material-ui/core';

const Profile = () => {
  const { preferences, setPreferences } = useContext(ProfilePreferencesContext);

  const handleDpiChange = (event, newValue) => {
    setPreferences(prev => ({ ...prev, dpi: newValue }));
  };

  const handleResolutionChange = (event, type) => {
    const value = event.target.value;
    setPreferences(prev => ({
      ...prev,
      resolution: { ...prev.resolution, [type]: value },
    }));
  };

  return (
    <div>
      <Typography variant="h4">Profile Settings</Typography>
      <Typography>DPI</Typography>
      <Slider
        value={preferences.dpi}
        onChange={handleDpiChange}
        min={50}
        max={300}
        aria-labelledby="dpi-slider"
      />
      <Typography>Resolution</Typography>
      <input
        type="number"
        value={preferences.resolution.width}
        onChange={(e) => handleResolutionChange(e, 'width')}
        placeholder="Width"
      />
      <input
        type="number"
        value={preferences.resolution.height}
        onChange={(e) => handleResolutionChange(e, 'height')}
        placeholder="Height"
      />
    </div>
  );
};

export default Profile;
