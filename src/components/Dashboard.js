import './Dashboard.css';

import { Button, Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import DetailsWidget from './DetailsWidget';
import DraggableWidget from './DraggableWidget';
import RadioHead from './RadioHead';
import SettingsIcon from './SettingsIcon';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container className="dashboard">
      <Typography variant="h4">Dashboard</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <SettingsIcon onClick={() => console.log('Settings clicked')} />
      {/* Example RadioHead and DraggableWidget components */}
      <RadioHead
        id={1}
        name="RadioHead 1"
        status="active"
        onPushToTalk={() => console.log('Push to talk')}
        onMute={() => console.log('Mute')}
      />
      <DraggableWidget id="details" title="Details Widget">
        <DetailsWidget radioHead={{ name: 'RadioHead 1', status: 'active', fileName: 'recording1.mp3' }} />
      </DraggableWidget>
    </Container>
  );
};

export default Dashboard;
