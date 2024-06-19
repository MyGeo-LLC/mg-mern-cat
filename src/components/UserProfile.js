import { Button, Container, Slider, TextField, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect } from 'react';
import { fetchProfile, updateProfile } from '../api/api';

import { ProfilePreferencesContext } from '../contexts/ProfilePreferencesContext';
import { css } from '@emotion/react';

const userProfileStyle = css`
  padding: 20px;
  background-color: #007BFF;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }
`;

const UserProfile = () => {
  const { preferences, setPreferences } = useContext(ProfilePreferencesContext);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await fetchProfile();
        setPreferences(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    loadProfile();
  }, [setPreferences]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (name) => (event, newValue) => {
    setPreferences((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSave = async () => {
    try {
      await updateProfile(preferences);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <Container css={userProfileStyle}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <TextField
        label="Name"
        name="name"
        value={preferences.name || ''}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Email"
        name="email"
        value={preferences.email || ''}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <Typography variant="body1">DPI</Typography>
      <Slider
        value={preferences.dpi}
        onChange={handleSliderChange('dpi')}
        min={50}
        max={300}
      />
      <Typography variant="body1">Resolution</Typography>
      <TextField
        label="Width"
        name="resolution.width"
        value={preferences.resolution.width}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Height"
        name="resolution.height"
        value={preferences.resolution.height}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </Container>
  );
};

export default UserProfile;
