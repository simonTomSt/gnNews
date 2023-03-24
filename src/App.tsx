import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ConfigProvider as ThemeProvider } from 'antd';

import { RoutesPaths, theme } from '@/utils';
import { RootLayout } from '@/layouts';
import './styles/main.scss';
import { TranslationProvider } from './translations';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesPaths.Home} element={<RootLayout />}></Route>
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
