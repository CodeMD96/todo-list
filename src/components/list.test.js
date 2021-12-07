import { render, screen } from '@testing-library/react';
import List from './List';

const mockData = ["do this", "do that"]

describe("list tests", () => {
  test('renders the list', () => {
    render(<List items={mockData} />);
    const element = screen.getAllByText(/done/i);
    expect(element.length).toBe(2);
  });
})