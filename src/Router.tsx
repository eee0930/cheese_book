import { createHashRouter } from 'react-router-dom';
import App from './App';
// layouts
import BasicLayout from './layouts/BasicLayout';
// components
import Home from './routes/Home';
import AuthLayout from './layouts/AuthLayout';
import ListBestSeller from './routes/ListBestSeller';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [],
      },
      {
        path: '',
        element: <BasicLayout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: '/best',
            element: <ListBestSeller />,
          },
        ],
      },
    ],
  },
]);

export default router;
