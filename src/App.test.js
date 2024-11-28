import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Лабораторная 4/i);
  expect(linkElement).toBeInTheDocument();
});
