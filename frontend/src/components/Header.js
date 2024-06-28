import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setOpen(false);
  };

  const handleCancelLogout = () => {
    setOpen(false);
  };

  return (
    <header>
      <h1>App Header</h1>
      {user && (
        <>
          <Button onClick={handleLogout} style={{ margin: '10px' }}>Logout</Button>
          <Dialog open={open} onClose={handleCancelLogout}>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to log out?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancelLogout} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmLogout} color="secondary">
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </header>
  );
};

export default Header;
