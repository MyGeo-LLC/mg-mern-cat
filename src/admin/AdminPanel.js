import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = () => {
    // Add user logic
  };

  const handleModifyUser = (id) => {
    // Modify user logic
  };

  const handleDeleteUser = (id) => {
    // Delete user logic
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.role}
            <button onClick={() => handleModifyUser(user._id)}>Modify</button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
