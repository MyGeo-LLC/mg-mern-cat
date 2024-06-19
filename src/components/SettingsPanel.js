import React, { useContext } from 'react';
import { Slider, TextField, Typography } from '@mui/material';

import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  settingsPanel: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  textfield: {
    marginRight: theme.spacing(2),
    width: '100px',
  },
}));

const SettingsPanel = () => {
  const classes = useStyles();
  const { preferences, setPreferences } = useContext(ProfilePreferencesContext);

  const handleDpiChange = (event, newValue) => {
    setPreferences((prev) => ({ ...prev, dpi: newValue }));
  };

  const handleResolutionChange = (event, type) => {
    const value = event.target.value;
    setPreferences((prev) => ({
      ...prev,
      resolution: { ...prev.resolution, [type]: value },
    }));
  };

  return (
    <div className={classes.settingsPanel}>
      <Typography variant="body1">Display Settings</Typography>
      <Typography>DPI</Typography>
      <Slider value={preferences.dpi} onChange={handleDpiChange} min={50} max={300} aria-labelledby="dpi-slider" />
      <Typography>Resolution</Typography>
      <TextField
        className={classes.textfield}
        type="number"
        value={preferences.resolution.width}
        onChange={(e) => handleResolutionChange(e, 'width')}
        placeholder="Width"
        variant="outlined"
        margin="normal"
      />
      <TextField
        className={classes.textfield}
        type="number"
        value={preferences.resolution.height}
        onChange={(e) => handleResolutionChange(e, 'height')}
        placeholder="Height"
        variant="outlined"
        margin="normal"
      />
    </div>
  );
};

export default SettingsPanel;
