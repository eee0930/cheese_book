import { createHashRouter } from 'react-router-dom';
import App from './App';
// layouts
import BasicLayout from './layouts/BasicLayout';
import AuthLayout from './layouts/AuthLayout';
// routes
import Home from './routes/Home';
import ListBestSeller from './routes/ListBestSeller';
import Login from './routes/Login';
import ListNewBooks from './routes/ListNewBooks';
import Recommend from './routes/Recommend';
import ViewerModal from './routes/ViewerModal';
import ViewDetail from './routes/ViewDetail';
import Bookshelves from './routes/Bookshelves';
import SearchResults from './routes/SearchResults';
import RecommendResults from './routes/RecommendResults';
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
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
        errorElement: <ErrorComponent />,
      },
      {
        path: '',
        element: <BasicLayout />,
        children: [
          {
            path: '',
            element: <Home />,
            children: [
              {
                path: 'book/:id',
                element: <ViewDetail />,
                children: [
                  {
                    path: 'book/viewer/:id',
                    element: <ViewerModal />,
                  },
                ],
              },
            ],
          },
          {
            path: 'best',
            element: <ListBestSeller />,
            children: [
              {
                path: ':id',
                element: <ViewDetail />,
                children: [
                  {
                    path: 'viewer',
                    element: <ViewerModal />,
                  },
                ],
              },
            ],
          },
          {
            path: 'new',
            element: <ListNewBooks />,
            children: [
              {
                path: ':id',
                element: <ViewDetail />,
                children: [
                  {
                    path: 'viewer',
                    element: <ViewerModal />,
                  },
                ],
              },
            ],
          },
          {
            path: 'recommend',
            element: <Recommend />,
            children: [
              {
                path: 'result',
                element: <RecommendResults />,
                children: [
                  {
                    path: ':id',
                    element: <ViewDetail />,
                    children: [
                      {
                        path: 'viewer',
                        element: <ViewerModal />,
                      },
                    ],
                  },
                ],
                errorElement: <ErrorComponent />,
              },
            ],
          },
          {
            path: 'my',
            element: <Bookshelves />,
            children: [
              {
                path: ':id',
                element: <ViewDetail />,
                children: [
                  {
                    path: 'viewer',
                    element: <ViewerModal />,
                  },
                ],
              },
            ],
          },
          {
            path: 'search',
            element: <SearchResults />,
            children: [
              {
                path: ':id',
                element: <ViewDetail />,
                children: [
                  {
                    path: 'viewer',
                    element: <ViewerModal />,
                  },
                ],
              },
            ],
          },
        ],
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
