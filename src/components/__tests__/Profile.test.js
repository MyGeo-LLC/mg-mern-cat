// src/components/__tests__/Profile.test.js

import { fireEvent, render } from '@testing-library/react';

import Profile from '../Profile';
import { ProfilePreferencesProvider } from '../../contexts/ProfilePreferencesContext';
import React from 'react';

describe('Profile Component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ProfilePreferencesProvider>
        <Profile />
      </ProfilePreferencesProvider>
    );
  });

  test('should render Profile component', () => {
    expect(component.getByText('Profile Settings')).toBeInTheDocument();
  });

  test('should update DPI', () => {
    const dpiSlider = component.getByLabelText('dpi-slider');
    fireEvent.change(dpiSlider, { target: { value: 100 } });
    expect(dpiSlider.value).toBe('100');
  });

  // Add more tests as needed
});
