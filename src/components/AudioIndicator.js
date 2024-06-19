import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  audioIndicator: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.3s ease',
  },
  incoming: {
    backgroundColor: theme.palette.primary.main,
  },
  outgoing: {
    backgroundColor: theme.palette.secondary.main,
  },
  active: {
    backgroundColor: theme.palette.success.main,
  },
}));

const AudioIndicator = ({ type, active }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.audioIndicator} ${classes[type]} ${active ? classes.active : ''}`}>
      <Typography variant="body2">{type === 'incoming' ? 'Incoming Audio' : 'Outgoing Audio'}</Typography>
    </div>
  );
};

AudioIndicator.propTypes = {
  type: PropTypes.oneOf(['incoming', 'outgoing']).isRequired,
  active: PropTypes.bool.isRequired,
};

export default AudioIndicator;
