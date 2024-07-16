#!/bin/bash

# Create test directories if they don't exist
mkdir -p ../tests/integration

# Create unit test files
cat <<EOF > ../tests/settings.test.js
import { saveSettings, loadSettings } from '../src/utils/settings';

describe('Settings Module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save settings to localStorage', () => {
    const id = '123';
    const settings = { theme: 'dark' };
    saveSettings(id, settings);

    expect(localStorage.setItem).toHaveBeenCalledWith(\`drh-settings-\${id}\`, JSON.stringify(settings));
  });

  it('should load settings from localStorage', () => {
    const id = '123';
    const settings = { theme: 'dark' };
    localStorage.setItem(\`drh-settings-\${id}\`, JSON.stringify(settings));

    const result = loadSettings(id);

    expect(result).toEqual(settings);
  });

  it('should return null if no settings are found', () => {
    const result = loadSettings('nonexistent-id');

    expect(result).toBeNull();
  });
});
EOF

cat <<EOF > ../tests/logger.test.js
import logger from '../src/utils/logger';

describe('Logger Module', () => {
  it('should log info messages', () => {
    console.log = jest.fn();

    logger.info('Test info message');

    expect(console.log).toHaveBeenCalledWith('INFO: Test info message');
  });

  it('should log error messages', () => {
    console.error = jest.fn();

    logger.error('Test error message');

    expect(console.error).toHaveBeenCalledWith('ERROR: Test error message');
  });
});
EOF

cat <<EOF > ../tests/authActions.test.js
import { login, logout } from '../src/redux/actions/authActions';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../src/redux/actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../src/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../src/api');

describe('Auth Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches LOGIN_SUCCESS after a successful login', async () => {
    const userData = { email: 'test@example.com', password: 'password' };
    const responseData = { id: 1, name: 'John Doe' };

    api.login.mockResolvedValue({ data: responseData });

    await store.dispatch(login(userData.email, userData.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN_SUCCESS, payload: responseData });
  });

  it('dispatches LOGIN_FAIL after a failed login', async () => {
    const userData = { email: 'test@example.com', password: 'password' };

    api.login.mockRejectedValue(new Error('Login failed'));

    await store.dispatch(login(userData.email, userData.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN_FAIL });
  });

  it('dispatches LOGOUT', () => {
    store.dispatch(logout());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGOUT });
  });
});
EOF

cat <<EOF > ../tests/authReducer.test.js
import authReducer from '../src/redux/reducers/authReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../src/redux/actions/types';

describe('Auth Reducer', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: { id: 1, name: 'John Doe' },
    };

    const expectedState = {
      user: action.payload,
      isAuthenticated: true,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAIL', () => {
    const action = { type: LOGIN_FAIL };

    const expectedState = {
      user: null,
      isAuthenticated: false,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };

    const expectedState = {
      user: null,
      isAuthenticated: false,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});
EOF

# Create integration test files
cat <<EOF > ../tests/integration/AdminPanel.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../src/App';
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
EOF

cat <<EOF > ../tests/integration/ThemeToggle.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/App';
import { ThemeProvider } from '../../src/contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Theme Toggle', () => {
  it('should toggle theme from light to dark', () => {
    render(
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    );

    // Verify initial theme
    expect(document.body.className).toBe('');

    // Toggle theme
    fireEvent.click(screen.getByText('Toggle Theme'));

    // Verify dark theme
    expect(document.body.className).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    render(
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    );

    // Toggle to dark theme
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(document.body.className).toBe('dark');

    // Toggle back to light theme
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(document.body.className).toBe('');
  });
});
EOF

echo "Test files generated."
