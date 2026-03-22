import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Project Vidya shell', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Project Vidya/i })).toBeInTheDocument();
});
