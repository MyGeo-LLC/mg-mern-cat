import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

describe('Admin Panel User Management', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [{ _id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' }] });
  });

  it('should fetch and display users', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Navigate to admin panel
    fireEvent.click(screen.getByText('Admin'));

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should add a new user', async () => {
    axios.post.mockResolvedValueOnce({ data: { _id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'user' } });

    render(
      <Router>
        <App />
      </Router>
    );

    // Navigate to admin panel
    fireEvent.click(screen.getByText('Admin'));

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Add user
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'user' } });
    fireEvent.click(screen.getByText('Add User'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('should edit a user', async () => {
    axios.put.mockResolvedValueOnce({ data: { _id: '1', name: 'John Smith', email: 'john@example.com', role: 'admin' } });

    render(
      <Router>
        <App />
      </Router>
    );

    // Navigate to admin panel
    fireEvent.click(screen.getByText('Admin'));

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Edit user
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Smith' } });
    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => expect(axios.put).toHaveBeenCalledTimes(1));
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });

  it('should delete a user', async () => {
    axios.delete.mockResolvedValueOnce({});

    render(
      <Router>
        <App />
      </Router>
    );

    // Navigate to admin panel
    fireEvent.click(screen.getByText('Admin'));

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Delete user
    fireEvent.click(screen.getByText('Delete'));

    await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(1));
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});
