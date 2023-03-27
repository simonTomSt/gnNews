import { renderWithProviders } from '@/utils/testing';
import { screen } from '@testing-library/react';
import { CountryName } from '../CountryName';

describe('CountryName', () => {
  const originalEnv = process.env.FLAGS_URL;

  beforeEach(() => {
    process.env.FLAGS_URL = 'url';
  });

  afterEach(() => {
    process.env.FLAGS_URL = originalEnv;
  });

  it('renders the country name and flag image', () => {
    renderWithProviders(<CountryName country="us" />);

    expect(screen.getByAltText('us')).toBeInTheDocument();
    expect(screen.getByText('countries.us')).toBeInTheDocument();
  });

  it('renders the correct flag size based on the `size` prop', () => {
    renderWithProviders(<CountryName country="us" size="24" />);

    const imgElement = screen.getByAltText('us') as HTMLImageElement;
    expect(imgElement.src).toContain('url/US/flat/24.png');
  });
});
