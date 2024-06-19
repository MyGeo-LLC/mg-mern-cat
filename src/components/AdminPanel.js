// src/admin/AdminPanel.js

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const AdminPanel = () => {
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
    <div>
      <h1>Admin Panel</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.role}
            <button onClick={() => handleModifyUser(user._id, { ...user, role: user.role === 'user' ? 'admin' : 'user' })}>
              Toggle Role
            </button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
