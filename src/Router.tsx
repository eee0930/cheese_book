import { createHashRouter } from 'react-router-dom';
import App from './App';
// layouts
import BasicLayout from './layouts/BasicLayout';
import AuthLayout from './layouts/AuthLayout';
// components
import Home from './routes/Home';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
          },
        ],
      },
      {
        path: '',
        element: <BasicLayout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
