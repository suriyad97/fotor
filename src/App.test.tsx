import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as RTL from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = RTL.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
