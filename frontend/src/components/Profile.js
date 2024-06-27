import { Box, Button, Slider, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';

import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';

const Profile = () => {
  const { preferences, setPreferences } = useContext(ProfilePreferencesContext);
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleSave = () => {
    setPreferences(localPreferences);
    // Save to backend if needed TODO 
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6">User Preferences</Typography>
      <TextField
        label="Font Size"
        type="number"
        value={localPreferences.fontSize}
        onChange={(e) => setLocalPreferences({ ...localPreferences, fontSize: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        label="Resolution Width"
        type="number"
        value={localPreferences.resolution.width}
        onChange={(e) => setLocalPreferences({ ...localPreferences, resolution: { ...localPreferences.resolution, width: e.target.value } })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        label="Resolution Height"
        type="number"
        value={localPreferences.resolution.height}
        onChange={(e) => setLocalPreferences({ ...localPreferences, resolution: { ...localPreferences.resolution, height: e.target.value } })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Slider
        label="DPI"
        value={localPreferences.dpi}
        onChange={(e, value) => setLocalPreferences({ ...localPreferences, dpi: value })}
        aria-labelledby="dpi-slider"
        valueLabelDisplay="auto"
        sx={{ mt: 2 }}
        min={50}
        max={300}
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
        Save Preferences
      </Button>
    </Box>
  );
};

export default Profile;
