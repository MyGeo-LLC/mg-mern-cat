import { Snackbar, SnackbarContent } from '@material-ui/core';

import React from 'react';

const CustomSnackbar = ({ message, open, onClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={6000} //TODO in config
    onClose={onClose}
  >
    <SnackbarContent
      message={<span>{message}</span>}
      onClose={onClose}
    />
  </Snackbar>
);

export default CustomSnackbar;
