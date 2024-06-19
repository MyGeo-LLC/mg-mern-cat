import './RadioHead.css';

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const RadioHead = ({ id, name, status, onPushToTalk, onMute }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    // Simulate real-time status updates
    const statusInterval = setInterval(() => {
      setCurrentStatus((prevStatus) => (prevStatus === 'active' ? 'inactive' : 'active'));
    }, 5000);
    return () => clearInterval(statusInterval);
  }, []);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    onMute(id, !isMuted);
  };

  return (
    <Card className="radio-head">
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">Status: {currentStatus}</Typography>
        <Button variant="contained" color="primary" onClick={() => onPushToTalk(id)}>
          Push to Talk
        </Button>
        <Button variant="contained" color={isMuted ? "secondary" : "default"} onClick={handleMuteToggle}>
          {isMuted ? "Unmute" : "Mute"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RadioHead;
