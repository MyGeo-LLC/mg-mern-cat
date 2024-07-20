// tests/Profile.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from '../src/components/Profile';
import { ProfilePreferencesContext } from '../src/contexts/ProfilePreferencesContext';

const mockSetPreferences = jest.fn();

const preferences = {
  fontSize: 16,
  resolution: { width: 1920, height: 1080 },
  dpi: 100,
};

test('renders Profile and allows preference changes', () => {
  render(
    <ProfilePreferencesContext.Provider value={{ preferences, setPreferences: mockSetPreferences }}>
      <Profile />
    </ProfilePreferencesContext.Provider>
  );

  // Check initial values
  expect(screen.getByLabelText(/Font Size/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Resolution Width/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Resolution Height/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/DPI/i)).toBeInTheDocument();

  // Change values
  fireEvent.change(screen.getByLabelText(/Font Size/i), { target: { value: 18 } });
  fireEvent.change(screen.getByLabelText(/Resolution Width/i), { target: { value: 2560 } });
  fireEvent.change(screen.getByLabelText(/Resolution Height/i), { target: { value: 1440 } });
  fireEvent.change(screen.getByLabelText(/DPI/i), { target: { value: 150 } });

  // Save preferences
  fireEvent.click(screen.getByText(/Save Preferences/i));

  expect(mockSetPreferences).toHaveBeenCalledWith({
    fontSize: 18,
    resolution: { width: 2560, height: 1440 },
    dpi: 150,
  });
});

