import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading', () => {
  render(<App />);
  const element = screen.getByText(/todo list/i);
  expect(element).toBeInTheDocument();
});

describe("role test block", () => {
  test('renders the text input', () => {
    render(<App />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
  
  test('renders the input button', () => {
    render(<App />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
})

