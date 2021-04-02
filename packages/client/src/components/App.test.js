import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page element', () => {
  render(<App />);
  const homePageElement = screen.getByText(/Home/i);
  expect(homePageElement).toBeInTheDocument();
});
