import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  render(<App/>);
});

test("renders welcome on nav", () => {
  const { getByText } = render(<App />);
  const value = getByText(/welcome/i);
  expect(value).toBeDefined();
});





