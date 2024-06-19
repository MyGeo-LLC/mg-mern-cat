import { Box, Button, Container, Slider, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import API from '../api/axiosInstance';
import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { makeStyles } from '@mui/styles';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await API.get('/users/profile');
        setPreferences(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    loadProfile();
  }, [setPreferences]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await API.put('/users/profile', preferences);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <TextField
        className={classes.input}
        label="Name"
        name="name"
        value={preferences.name || ''}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        className={classes.input}
        label="Email"
        name="email"
        value={preferences.email || ''}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save Changes
      </Button>
    </Container>
  );
};

export default Profile;
