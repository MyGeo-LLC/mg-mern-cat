import React from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';

const CustomSnackbar = ({ message, open, onClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
  >
    <SnackbarContent
      message={<span>{message}</span>}
      onClose={onClose}
    />
  </Snackbar>
);

export default CustomSnackbar;
