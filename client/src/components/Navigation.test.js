import React from 'react';
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test('renders without crashing', () => {
    render(<Navigation/>);
  });

  test("renders toggle button on nav", () => {
    const { getByText } = render(<Navigation />);
    const value = getByText(/toggle dark mode/i);
    expect(value).toBeDefined();
  });
  