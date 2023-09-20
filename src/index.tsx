import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const client = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </div>
);
