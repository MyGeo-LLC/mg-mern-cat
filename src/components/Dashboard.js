import './Dashboard.css';

import { Button, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import API from '../api/axiosInstance';
import DraggableRadioHead from './DraggableRadioHead';
import DraggableWidget from './DraggableWidget';
import SettingsIcon from './SettingsIcon';
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
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  settingsIcon: {
    cursor: 'pointer',
    marginBottom: theme.spacing(4),
  },
  radioHead: {
    marginBottom: theme.spacing(4),
  },
  widget: {
    marginBottom: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { logout } = useContext(AuthContext);
  const [radioHeads, setRadioHeads] = useState([]);

  useEffect(() => {
    const fetchRadioHeads = async () => {
      try {
        const { data } = await API.get('/radioheads');
        setRadioHeads(data);
      } catch (error) {
        console.error('Error fetching radio heads:', error);
      }
    };

    fetchRadioHeads();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>Dashboard</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout} className={classes.button}>
        Logout
      </Button>
      <SettingsIcon onClick={() => console.log('Settings clicked')} className={classes.settingsIcon} />
      {radioHeads.map((radioHead) => (
        <DraggableRadioHead
          key={radioHead._id}
          id={radioHead._id}
          name={radioHead.name}
          status={radioHead.status}
          onPushToTalk={() => console.log('Push to talk')}
          onMute={() => console.log('Mute')}
          className={classes.radioHead}
        />
      ))}
      <DraggableWidget id="details" title="Details Widget" className={classes.widget}>
        <div>Widget Content Here</div>
      </DraggableWidget>
    </Container>
  );
};

export default Dashboard;
