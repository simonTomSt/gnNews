import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { RoutesPaths } from '@/utils';
import { Logo } from '../Logo';

describe('Logo Component', () => {
  test('renders the logo correctly', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    expect(screen.getByText(/gn/i)).toBeInTheDocument();
    expect(screen.getByText(/News/i)).toBeInTheDocument();
  });

  test('logo links to home page', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const logo = screen.getByText(/gn/i);

    expect(logo.closest('a')).toHaveAttribute('href', RoutesPaths.Home);
  });
});
