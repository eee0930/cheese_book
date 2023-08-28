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
import Taste from './routes/Taste';
import ViewDetail from './routes/ViewDetail';
import Bookshelves from './routes/Bookshelves';
import SearchResults from './routes/SearchResults';
import TasteResults from './routes/TasteResults';
import NotFound from './routes/NotFound';
// components
import ErrorComponent from './components/ErrorComponet';
import BookViewer from './routes/BookViewer';

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
            children: [
              {
                path: 'result',
                element: <TasteResults />,
              },
            ],
          },
          {
            path: 'my',
            element: <Bookshelves />,
          },
          {
            path: 'search',
            element: <SearchResults />,
          },
          {
            path: 'book/:isbn',
            element: <ViewDetail />,
            children: [
              {
                path: 'viewer',
                element: <BookViewer />,
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
