import { Box, Button, Slider, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  settingsPanel: {
    backgroundColor: '#292929',
    padding: theme.spacing(2),
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    marginTop: theme.spacing(2),
    color: '#ffffff',
  },
  input: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#e82127',
    '&:hover': {
      backgroundColor: '#c51e22',
    },
  },
  slider: {
    color: '#e82127',
  },
  typography: {
    color: '#ffffff',
  },
}));

const SettingsPanel = ({ onClose }) => {
  const classes = useStyles();
  const { preferences, setPreferences } = useContext(ProfilePreferencesContext);

  const handleVolumeChange = (event, newValue, type) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: newValue,
    }));
  };

  const handleFileNameChange = (event) => {
    const value = event.target.value;
    setPreferences((prev) => ({
      ...prev,
      recordingFileName: value,
    }));
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setPreferences((prev) => ({
      ...prev,
      color: value,
    }));
  };

  return (
    <Box className={classes.settingsPanel}>
      <Typography variant="h6" className={classes.typography}>RadioHead Settings</Typography>
      <Typography className={classes.typography}>Incoming Volume</Typography>
      <Slider
        value={preferences.incomingVolume}
        onChange={(e, newValue) => handleVolumeChange(e, newValue, 'incomingVolume')}
        min={0}
        max={100}
        className={classes.slider}
      />
      <Typography className={classes.typography}>Outgoing Volume</Typography>
      <Slider
        value={preferences.outgoingVolume}
        onChange={(e, newValue) => handleVolumeChange(e, newValue, 'outgoingVolume')}
        min={0}
        max={100}
        className={classes.slider}
      />
      <Typography className={classes.typography}>Master Volume</Typography>
      <Slider
        value={preferences.masterVolume}
        onChange={(e, newValue) => handleVolumeChange(e, newValue, 'masterVolume')}
        min={0}
        max={100}
        className={classes.slider}
      />
      <TextField
        className={classes.input}
        label="Recording File Name"
        value={preferences.recordingFileName}
        onChange={handleFileNameChange}
        variant="outlined"
      />
      <TextField
        className={classes.input}
        label="Color"
        type="color"
        value={preferences.color}
        onChange={handleColorChange}
        variant="outlined"
      />
      <Button variant="contained" className={classes.button} onClick={onClose}>
        Close
      </Button>
    </Box>
  );
};

export default SettingsPanel;
