import { fireEvent, screen } from '@testing-library/react';
import { setLanguage } from '@/store';
import { renderWithProviders } from '@/utils/testing';
import { LanguageSelect } from '../LanguageSelect';

describe('LanguageSelect componet', () => {
  it('renders with the current language selected', () => {
    renderWithProviders(<LanguageSelect />);

    const select = screen.getByRole('combobox');
    const currentLanguageOption = screen.getByText('pl');

    expect(select).toBeInTheDocument();
    expect(currentLanguageOption).toBeInTheDocument();
  });

  it('dispatches setLanguage action on language change', async () => {
    const selectedLanguage = 'en';
    const { store } = renderWithProviders(<LanguageSelect />);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, { target: { value: selectedLanguage } });
    fireEvent.click(screen.getAllByText('en')[1]);

    const expectedAction = setLanguage(selectedLanguage);
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
