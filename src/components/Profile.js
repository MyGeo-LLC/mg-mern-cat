// src/components/Profile.js

import { Box, Button, Container, Slider, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react';

import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { makeStyles } from '@material-ui/core/styles';
import { updateProfile } from '../api/api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {
  const classes = useStyles();
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

  const handleSave = async () => {
    try {
      await updateProfile(preferences);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile.');
    }
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h4" gutterBottom>Profile Settings</Typography>
      <Box className={classes.section}>
        <Typography gutterBottom>DPI</Typography>
        <Slider
          value={preferences.dpi}
          onChange={handleDpiChange}
          min={50}
          max={300}
          aria-labelledby="dpi-slider"
        />
      </Box>
      <Box className={classes.section}>
        <Typography gutterBottom>Resolution</Typography>
        <TextField
          className={classes.input}
          label="Width"
          type="number"
          value={preferences.resolution.width}
          onChange={(e) => handleResolutionChange(e, 'width')}
          fullWidth
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Height"
          type="number"
          value={preferences.resolution.height}
          onChange={(e) => handleResolutionChange(e, 'height')}
          fullWidth
          variant="outlined"
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
    </Container>
  );
};

export default Profile;
