import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ConfigProvider as ThemeProvider } from 'antd';

import { RoutesPaths, theme } from '@/utils';
import { RootLayout } from '@/layouts';
import { TranslationProvider } from './translations';
import {
  NewsPage,
  singleCountryNewsLoader,
} from './pages/single-country-news/NewsPage';
import { NotFound } from './pages/not-found/NotFound';
import { ServerError } from './pages/server-error/ServerError';
import './styles/main.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesPaths.Home} element={<RootLayout />}>
      <Route
        index
        element={<NewsPage />}
        errorElement={<ServerError />}
        loader={singleCountryNewsLoader}
      />
      <Route
        path={`${RoutesPaths.Country}/:countryName`}
        element={<NewsPage />}
        errorElement={<ServerError withBackButton />}
        loader={singleCountryNewsLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <TranslationProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default App;
