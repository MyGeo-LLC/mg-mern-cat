import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume, toggleMute } from '../redux/radioHeadsSlice';
import { Card, CardContent, Typography, Slider, Button } from '@material-ui/core';
import '../App.css';  // Custom styles

const RadioHead = ({ id }) => {
  const dispatch = useDispatch();
  const radioHead = useSelector(state => state.radioHeads.find(head => head.id === id));
  const [pushToTalk, setPushToTalk] = useState(false);
  const [status, setStatus] = useState('inactive');

  useEffect(() => {
    // Example: Real-time status update simulation
    const interval = setInterval(() => {
      setStatus(prevStatus => (prevStatus === 'inactive' ? 'active' : 'inactive'));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleVolumeChange = (event, newValue, type) => {
    dispatch(setVolume({ id, type, value: newValue }));
  };

  const handleMute = () => {
    dispatch(toggleMute(id));
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5">RadioHead {id}</Typography>
        <Slider
          value={radioHead.incomingVolume}
          onChange={(e, val) => handleVolumeChange(e, val, 'incoming')}
          aria-labelledby="incoming-volume-slider"
        />
        <Slider
          value={radioHead.outgoingVolume}
          onChange={(e, val) => handleVolumeChange(e, val, 'outgoing')}
          aria-labelledby="outgoing-volume-slider"
        />
        <Slider
          value={radioHead.masterVolume}
          onChange={(e, val) => handleVolumeChange(e, val, 'master')}
          aria-labelledby="master-volume-slider"
        />
        <Button onClick={() => setPushToTalk(!pushToTalk)}>
          {pushToTalk ? 'Release to Talk' : 'Push to Talk'}
        </Button>
        <Button onClick={handleMute}>
          {radioHead.isMuted ? 'Unmute' : 'Mute'}
        </Button>
        <Typography variant="body2" color={status === 'active' ? 'primary' : 'secondary'}>
          Status: {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RadioHead;
