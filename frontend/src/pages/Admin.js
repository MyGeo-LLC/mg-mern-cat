import { Box, Button, Container, Dialog, DialogContent, DialogTitle, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchProfile, fetchRadioHeads, updateProfile } from '../api';

import axios from 'axios';
import { useSnackbar } from '../contexts/SnackbarContext';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [radioHeads, setRadioHeads] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'operator' });
  const [editUser, setEditUser] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchUsers();
    fetchRadioHeadsData();
  }, []); // Empty dependency array means this runs once on mount

  const fetchUsers = async () => {
    try {
      const response = await fetchProfile();
      setUsers(response.data);
    } catch (error) {
      enqueueSnackbar('Error fetching users', { variant: 'error' });
    }
  };

  const fetchRadioHeadsData = async () => {
    try {
      const response = await fetchRadioHeads();
      setRadioHeads(response.data);
    } catch (error) {
      enqueueSnackbar('Error fetching radio heads', { variant: 'error' });
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('/api/users', newUser);
      fetchUsers();
      setNewUser({ name: '', email: '', role: 'operator' });
      enqueueSnackbar('User added successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error adding user', { variant: 'error' });
    }
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setSettingsOpen(true);
  };

  const handleSaveUser = async () => {
    try {
      await updateProfile(editUser);
      fetchUsers();
      setEditUser(null);
      setSettingsOpen(false);
      enqueueSnackbar('User updated successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error updating user', { variant: 'error' });
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers();
      enqueueSnackbar('User deleted successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error deleting user', { variant: 'error' });
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Users" />
        <Tab label="Radio Heads" />
      </Tabs>
      {tabIndex === 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>Manage Users</Typography>
          <TextField
            label="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button onClick={handleAddUser} color="primary" variant="contained" sx={{ mt: 2 }}>Add User</Button>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Existing Users</Typography>
          {users.map((user) => (
            <Box key={user._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
              <Typography>{user.name} ({user.email}) - {user.role}</Typography>
              <Box>
                <Button onClick={() => handleEditUser(user)} color="primary" variant="contained" sx={{ mr: 1 }}>Edit</Button>
                <Button onClick={() => handleDeleteUser(user._id)} color="secondary" variant="contained">Delete</Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {tabIndex === 1 && (
        <Box>
          <Typography variant="h6" gutterBottom>Manage Radio Heads</Typography>
          {radioHeads.map((radioHead) => (
            <Box key={radioHead.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
              <Typography>{radioHead.name}</Typography>
              <Button onClick={() => { /* open settings for radio head */ }} color="primary" variant="contained">Settings</Button>
            </Box>
          ))}
        </Box>
      )}

      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editUser?.name || ''}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Email"
            value={editUser?.email || ''}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Role"
            value={editUser?.role || ''}
            onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button onClick={handleSaveUser} color="primary" variant="contained" sx={{ mt: 2 }}>Save</Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Admin;
