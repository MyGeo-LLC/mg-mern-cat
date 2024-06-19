import React from 'react';
import { IconButton } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

const SettingsIcon = ({ onClick }) => (
  <IconButton onClick={onClick} color="primary" aria-label="settings">
    <Settings />
  </IconButton>
);

export default SettingsIcon;
