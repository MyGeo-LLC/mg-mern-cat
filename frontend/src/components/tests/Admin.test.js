import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Admin from '../Admin';
import { AuthProvider } from '../../contexts/AuthContext';
import { SnackbarProvider } from '../../contexts/SnackbarContext';
import { ShortcutsProvider } from '../../contexts/ShortcutsContext';

const mock = new MockAdapter(axios);

describe('Admin Component', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('fetches and displays devices and radio heads', async () => {
    mock.onGet('/api/devices').reply(200, [{ _id: '1', name: 'Device 1', type: 'radio' }]);
    mock.onGet('/api/radioheads').reply(200, [{ _id: '1', name: 'RadioHead 1', status: 'active', fileName: 'file.mp3', settings: { incomingVolume: 50, outgoingVolume: 50, masterVolume: 50, color: '#000000' } }]);

    render(
      <AuthProvider>
        <SnackbarProvider>
          <ShortcutsProvider>
            <Admin />
          </ShortcutsProvider>
        </SnackbarProvider>
      </AuthProvider>
    );

    expect(await screen.findByText('Device 1')).toBeInTheDocument();
    expect(await screen.findByText('RadioHead 1')).toBeInTheDocument();
  });

  it('adds a new device', async () => {
    mock.onPost('/api/admin/device').reply(201, { _id: '2', name: 'Device 2', type: 'phone' });

    render(
      <AuthProvider>
        <SnackbarProvider>
          <ShortcutsProvider>
            <Admin />
          </ShortcutsProvider>
        </SnackbarProvider>
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/Device Name/i), { target: { value: 'Device 2' } });
    fireEvent.change(screen.getByLabelText(/Device Type/i), { target: { value: 'phone' } });

    fireEvent.click(screen.getByText(/Add Device/i));

    await waitFor(() => expect(screen.getByText('Device 2')).toBeInTheDocument());
  });

  it('removes a device', async () => {
    mock.onGet('/api/devices').reply(200, [{ _id: '1', name: 'Device 1', type: 'radio' }]);
    mock.onDelete('/api/admin/device/1').reply(200);

    render(
      <AuthProvider>
        <SnackbarProvider>
          <ShortcutsProvider>
            <Admin />
          </ShortcutsProvider>
        </SnackbarProvider>
      </AuthProvider>
    );

    expect(await screen.findByText('Device 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Remove/i));

    await waitFor(() => expect(screen.queryByText('Device 1')).not.toBeInTheDocument());
  });

  it('adds a new radio head', async () => {
    mock.onPost('/api/admin/radiohead').reply(201, { _id: '2', name: 'RadioHead 2', status: 'active', fileName: 'file2.mp3', settings: { incomingVolume: 50, outgoingVolume: 50, masterVolume: 50, color: '#000000' } });

    render(
      <AuthProvider>
        <SnackbarProvider>
          <ShortcutsProvider>
            <Admin />
          </ShortcutsProvider>
        </SnackbarProvider>
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/Radio Head Name/i), { target: { value: 'RadioHead 2' } });
    fireEvent.change(screen.getByLabelText(/File Name/i), { target: { value: 'file2.mp3' } });

    fireEvent.click(screen.getByText(/Add Radio Head/i));

    await waitFor(() => expect(screen.getByText('RadioHead 2')).toBeInTheDocument());
  });

  it('removes a radio head', async () => {
    mock.onGet('/api/radioheads').reply(200, [{ _id: '1', name: 'RadioHead 1', status: 'active', fileName: 'file.mp3', settings: { incomingVolume: 50, outgoingVolume: 50, masterVolume: 50, color: '#000000' } }]);
    mock.onDelete('/api/admin/radiohead/1').reply(200);

    render(
      <AuthProvider>
        <SnackbarProvider>
          <ShortcutsProvider>
            <Admin />
          </ShortcutsProvider>
        </SnackbarProvider>
      </AuthProvider>
    );

    expect(await screen.findByText('RadioHead 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Remove/i));

    await waitFor(() => expect(screen.queryByText('RadioHead 1')).not.toBeInTheDocument());
  });
});
