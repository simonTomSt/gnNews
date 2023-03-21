import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'antd/dist/reset.css';

import { RoutesPaths } from '@/utils';
import { RootLayout } from '@/layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesPaths.Home} element={<RootLayout />}></Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
