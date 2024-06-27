import { IconButton } from '@mui/material';
import React from 'react';
import { Settings } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  settingsIcon: {
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

const SettingsIcon = ({ onClick }) => {
  const classes = useStyles();
  return (
    <IconButton onClick={onClick} className={classes.settingsIcon}>
      <Settings />
    </IconButton>
  );
};

export default SettingsIcon;
