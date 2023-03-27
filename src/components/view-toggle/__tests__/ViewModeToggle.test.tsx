import { fireEvent, screen } from '@testing-library/react';

import { setDisplayMode } from '@/store';
import { NewsDisplayMode } from '@/utils/types';
import { renderWithProviders } from '@/utils/testing';
import { ViewModeToggle } from '../ViewModeToggle';

describe('ViewModeToggle Component', () => {
  it('renders the component with proper values and active default value', () => {
    renderWithProviders(<ViewModeToggle />);

    const tileRadio = screen.getByDisplayValue(NewsDisplayMode.Tile);
    const rowRadio = screen.getByDisplayValue(NewsDisplayMode.Row);

    expect(tileRadio).toBeInTheDocument();
    expect(rowRadio).toBeInTheDocument();

    expect(tileRadio).toBeChecked();
  });

  it('dispatches setDisplayMode action on mode change', () => {
    const { store } = renderWithProviders(<ViewModeToggle />);

    const rowButton = screen.getByTestId(`${NewsDisplayMode.Row}-radio`);
    fireEvent.click(rowButton);

    const expectedAction = setDisplayMode(NewsDisplayMode.Row);
    expect(store.getActions()).toContainEqual(expectedAction);

    expect(rowButton).toBeChecked();
  });
});
