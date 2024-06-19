import { Snackbar, SnackbarContent } from '@mui/material';

import React from 'react';

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
    <SnackbarContent message={<span>{message}</span>} onClose={onClose} />
  </Snackbar>
);

export default CustomSnackbar;
