import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import AppLayout from './containers/AppLayout';
import Lancamentos from './containers/Lancamentos';
import store from './redux/store';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'lancamentos',
        element: <Lancamentos />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} context={ReactReduxContext}>
    <PersistGate persistor={persistStore(store)}>

      <RouterProvider router={router} />

    </PersistGate>
  </Provider>,

);
