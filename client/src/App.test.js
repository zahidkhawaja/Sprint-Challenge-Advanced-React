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

test("Welcome header is rendering", () => {
  const { getByText } = render(<App />);
  const value = getByText(/welcome/i);
  expect(value).toBeDefined();
});

// test("Player info displays", () => {
//   const { getByText } = render(<App />);
//   const playerValue = getByText(/player/i);
//   expect(playerValue).toBeDefined();
// });





