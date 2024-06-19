import './RadioHead.css';

import { Button, Slider } from '@mui/material';
import { setVolume, toggleMute } from '../redux/radioHeadSlice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const RadioHead = ({ id }) => {
  const dispatch = useDispatch();
  const radioHead = useSelector((state) => state.radioHeads.find((head) => head.id === id));

  if (!radioHead) {
    return null;
  }

  const handleVolumeChange = (type, value) => {
    dispatch(setVolume({ id, type, value }));
  };

  const handleToggleMute = () => {
    dispatch(toggleMute(id));
  };

  return (
    <div className="radiohead">
      <h3>RadioHead {id}</h3>
      <Slider
        value={radioHead.incomingVolume}
        onChange={(e, value) => handleVolumeChange('incoming', value)}
        aria-labelledby="incoming-volume-slider"
      />
      <Slider
        value={radioHead.outgoingVolume}
        onChange={(e, value) => handleVolumeChange('outgoing', value)}
        aria-labelledby="outgoing-volume-slider"
      />
      <Slider
        value={radioHead.masterVolume}
        onChange={(e, value) => handleVolumeChange('master', value)}
        aria-labelledby="master-volume-slider"
      />
      <Button onClick={handleToggleMute}>
        {radioHead.isMuted ? 'Unmute' : 'Mute'}
      </Button>
    </div>
  );
};

export default RadioHead;
