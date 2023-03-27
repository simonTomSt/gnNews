import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { render } from '@testing-library/react';
import { RootState } from '@/store';
import { TranslationProvider } from '@/translations';
import { NewsDisplayMode } from '../types';
import { mockArticle } from './mockData';

type RenderWithProvidersOptions = {
  reduxProvider?: boolean;
  translationProvider?: boolean;
  reduxState?: Record<string, unknown>;
};

export const defaultStoreState: RootState = {
  newsDisplayMode: {
    mode: NewsDisplayMode.Tile,
  },
  language: { lang: 'pl' },
  news: {
    news: { articles: [mockArticle], status: 'ok', totalResults: 2 },
    requestStatus: 'success',
  },
};

const mockStore = configureMockStore([]);

export const renderWithProviders = (
  component: ReactElement,
  options: RenderWithProvidersOptions = {}
) => {
  const { reduxState = {} } = options;

  const customStore = mockStore({ ...defaultStoreState, ...reduxState });

  const renderResult = render(
    <Provider store={customStore} key="reduxProvider">
      <TranslationProvider key="translationProvider">
        <>{component}</>
      </TranslationProvider>
    </Provider>
  );

  return { renderResult, store: customStore };
};
