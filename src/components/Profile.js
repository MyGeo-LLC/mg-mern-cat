import React, { useContext } from 'react';
import { Box, Button, Container, Slider, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { updateProfile } from '../api/api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    marginTop: theme.spacing(8),
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
      <Typography variant="h4" gutterBottom className={classes.typography}>Profile Settings</Typography>
      <Box>
        <Typography gutterBottom className={classes.typography}>DPI</Typography>
        <Slider
          value={preferences.dpi}
          onChange={handleDpiChange}
          min={50}
          max={300}
          aria-labelledby="dpi-slider"
          className={classes.slider}
        />
      </Box>
      <Box>
        <Typography gutterBottom className={classes.typography}>Resolution</Typography>
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
      <Button variant="contained" color="primary" onClick={handleSave} className={classes.button}>Save Changes</Button>
    </Container>
  );
};

export default Profile;
