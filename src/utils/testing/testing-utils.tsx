import { cloneElement, ReactElement } from 'react';
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
  const {
    reduxProvider = true,
    reduxState = {},
    translationProvider = false,
  } = options;

  const customStore = mockStore({ ...defaultStoreState, ...reduxState });
  const providers = [];

  if (reduxProvider) {
    providers.push(
      <Provider store={customStore} key="reduxProvider">
        <>{component}</>
      </Provider>
    );
  }

  if (translationProvider) {
    providers.push(
      <TranslationProvider key="translationProvider">
        <>{component}</>
      </TranslationProvider>
    );
  }

  const renderResult = render(
    providers.reduce((wrappedComponent, provider) => {
      return cloneElement(provider, {}, wrappedComponent);
    }, component)
  );

  return { renderResult, store: customStore };
};
