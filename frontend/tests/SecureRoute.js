// tests/SecureRoute.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import SecureRoute from '../src/components/SecureRoute';
import { AuthContext } from '../src/contexts/AuthContext';

test('redirects to login if user is not authenticated', () => {
  const { container } = render(
    <AuthContext.Provider value={{ user: null }}>
      <MemoryRouter initialEntries={['/secure']}>
        <SecureRoute />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  expect(container.innerHTML).toMatch('login');
});

test('renders children if user is authenticated', () => {
  const { container } = render(
    <AuthContext.Provider value={{ user: { name: 'John Doe' } }}>
      <MemoryRouter initialEntries={['/secure']}>
        <SecureRoute>
          <div>Secure Content</div>
        </SecureRoute>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  expect(container.innerHTML).toMatch('Secure Content');
});

