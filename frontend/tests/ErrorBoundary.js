// tests/ErrorBoundary.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../src/components/ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
};

test('renders error message when error is thrown', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );

  expect(getByText(/something went wrong/i)).toBeInTheDocument();
  expect(getByText(/Error thrown from problem child/i)).toBeInTheDocument();
});

