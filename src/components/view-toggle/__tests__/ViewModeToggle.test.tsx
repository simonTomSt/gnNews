import { fireEvent, render, screen } from '@testing-library/react';
import configureStore, { type MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';

import { NewsDisplayMode } from '@/utils/types';
import { setDisplayMode } from '@/store';
import { ViewModeToggle } from '../ViewModeToggle';

const mockStore = configureStore([]);

describe('ViewModeToggle Component', () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({
      newsDisplayMode: {
        mode: NewsDisplayMode.Tile,
      },
    });
  });

  it('renders the component with proper values and active default value', () => {
    render(
      <Provider store={store}>
        <ViewModeToggle />
      </Provider>
    );

    const tileRadio = screen.getByDisplayValue(NewsDisplayMode.Tile);
    const rowRadio = screen.getByDisplayValue(NewsDisplayMode.Row);

    expect(tileRadio).toBeInTheDocument();
    expect(rowRadio).toBeInTheDocument();

    expect(tileRadio).toBeChecked();
  });

  it('dispatches setDisplayMode action on mode change', () => {
    render(
      <Provider store={store}>
        <ViewModeToggle />
      </Provider>
    );

    const rowButton = screen.getByTestId(`${NewsDisplayMode.Row}-radio`);
    fireEvent.click(rowButton);

    const expectedAction = setDisplayMode(NewsDisplayMode.Row);
    expect(store.getActions()).toContainEqual(expectedAction);

    expect(rowButton).toBeChecked();
  });
});
