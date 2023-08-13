import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </div>
);
