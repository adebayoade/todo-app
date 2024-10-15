import { RouteObject } from 'react-router-dom';
import { NotFound } from './pages/not-found';
import { Home } from './pages/home';
import { AppLayout } from './components/layouts/app-layout';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
