import { Button, Container, IconButton, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  adminPanel: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  list: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('/api/users', newUser);
      fetchUsers();
      setNewUser({ name: '', email: '', role: 'user' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleModifyUser = async (id, updatedUser) => {
    try {
      await axios.put(`/api/users/${id}`, updatedUser);
      fetchUsers();
    } catch (error) {
      console.error('Error modifying user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container className={classes.adminPanel}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <div className={classes.form}>
        <TextField
          label="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <TextField
          label="Email"
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      <List className={classes.list}>
        {users.map((user) => (
          <ListItem key={user._id}>
            <ListItemText primary={`${user.name} - ${user.role}`} />
            <IconButton onClick={() => handleModifyUser(user._id, { ...user, role: user.role === 'user' ? 'admin' : 'user' })}>
              Toggle Role
            </IconButton>
            <IconButton onClick={() => handleDeleteUser(user._id)}>
              Delete
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminPanel;
