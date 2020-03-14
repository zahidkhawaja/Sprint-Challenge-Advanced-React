import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  render(<App/>);
});

test("Welcome header renders on nav", () => {
  const { getByText } = render(<App />);
  const value = getByText(/welcome/i);
  expect(value).toBeDefined();
});

test("Player info displays", () => {
  const { getByText } = render(<App />);
  const playerValue = getByText(/player/i);
  expect(playerValue).toBeDefined();
});





