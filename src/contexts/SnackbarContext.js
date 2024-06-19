import React, { createContext, useState } from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';

export const SnackbarContext = createContext();

const SnackbarContextProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
    level: 'low',
  });

  const showSnackbar = (message, severity = 'info', level = 'low') => {
    setSnackbar({
      open: true,
      message,
      severity,
      level,
    });
  };

  const handleClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbar.open}
        autoHideDuration={snackbar.level === 'low' ? 3000 : snackbar.level === 'medium' ? 6000 : 9000}
        onClose={handleClose}
      >
        <SnackbarContent
          message={<span>{snackbar.message}</span>}
          style={{ backgroundColor: snackbar.severity === 'error' ? '#d32f2f' : '#43a047' }}
        />
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
