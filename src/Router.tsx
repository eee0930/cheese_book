import { createHashRouter } from 'react-router-dom';
import App from './App';
// routes
import BasicLayout from './routes/layouts/BasicLayout';
import AuthLayout from './routes/layouts/AuthLayout';
import Home from './routes/Home';
import ListBestSeller from './routes/ListBestSeller';
//import Login from './routes/Login';
import ListNewBooks from './routes/ListNewBooks';
import Taste from './routes/Taste';
import ViewDetail from './routes/ViewDetail';
import MyBooks from './routes/MyBooks';
import SearchResults from './routes/SearchResults';
import NotFound from './routes/NotFound';
// components
import ErrorComponent from './components/ErrorComponet';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        // children: [
        //   {
        //     path: 'login',
        //     element: <Login />,
        //   },
        // ],
        errorElement: <ErrorComponent />,
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
            path: 'best',
            element: <ListBestSeller />,
          },
          {
            path: 'new',
            element: <ListNewBooks />,
          },
          {
            path: 'taste',
            element: <Taste />,
          },
          {
            path: 'my',
            element: <MyBooks />,
          },
          {
            path: 'search',
            element: <SearchResults />,
          },
          {
            path: 'book/:id',
            element: <ViewDetail />,
          },
        ],
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
