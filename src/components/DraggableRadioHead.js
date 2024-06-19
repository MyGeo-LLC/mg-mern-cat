import './DraggableRadioHead.css';

import { Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

import AudioIndicator from './AudioIndicator';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsPanel from './SettingsPanel';

const DraggableRadioHead = ({ id, name, status, onPushToTalk, onMute }) => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <Card className="draggable-radio-head" draggable>
      <CardContent>
        <Typography variant="h6" className="draggable-radio-head-title">{name}</Typography>
        <Typography variant="body1" className="draggable-radio-head-status">Status: {status}</Typography>
        <AudioIndicator type="incoming" active={status === 'active'} />
        <AudioIndicator type="outgoing" active={status === 'active'} />
        <Button variant="contained" color="primary" onClick={onPushToTalk} className="draggable-radio-head-button">Push to Talk</Button>
        <Button variant="contained" color="secondary" onClick={onMute} className="draggable-radio-head-button">Mute</Button>
        <IconButton onClick={handleSettingsClick} className="settings-icon">
          <SettingsIcon />
        </IconButton>
      </CardContent>
      {showSettings && <SettingsPanel />}
    </Card>
  );
};

export default DraggableRadioHead;
