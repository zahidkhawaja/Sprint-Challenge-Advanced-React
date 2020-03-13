import React from 'react';
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test('renders without crashing', () => {
    render(<Navigation/>);
  });

  test("Toggle button on nav is rendering with correct value", () => {
    const { getByText } = render(<Navigation />);
    const value = getByText(/toggle dark mode/i);
    expect(value).toBeDefined();
  });

  test("Nav renders correctly", () => {
    const { getByText } = render(<Navigation />);
    const value = getByText(/welcome/i);
    expect(value).toBeDefined();
  });
  