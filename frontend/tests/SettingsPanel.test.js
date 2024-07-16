// tests/SettingsPanel.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsPanel from '../src/components/SettingsPanel';

const mockOnSave = jest.fn();

const settings = {
  incomingVolume: 30,
  outgoingVolume: 40,
  masterVolume: 50,
  backgroundColor: '#ffffff',
};

test('renders SettingsPanel and allows setting changes', () => {
  render(<SettingsPanel settings={settings} onSave={mockOnSave} />);

  // Check initial values
  expect(screen.getByLabelText(/Incoming Volume/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Outgoing Volume/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Master Volume/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Background Color/i)).toBeInTheDocument();

  // Change values
  fireEvent.change(screen.getByLabelText(/Incoming Volume/i), { target: { value: 60 } });
  fireEvent.change(screen.getByLabelText(/Outgoing Volume/i), { target: { value: 70 } });
  fireEvent.change(screen.getByLabelText(/Master Volume/i), { target: { value: 80 } });
  fireEvent.change(screen.getByLabelText(/Background Color/i), { target: { value: '#000000' } });

  // Save settings
  fireEvent.click(screen.getByText(/Save Settings/i));

  expect(mockOnSave).toHaveBeenCalledWith({
    incomingVolume: 60,
    outgoingVolume: 70,
    masterVolume: 80,
    backgroundColor: '#000000',
  });
});

