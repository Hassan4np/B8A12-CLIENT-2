import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";


import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider,} from 'react-query'
import AuthProvider from './Compnontes/MainPage/AuthProvider/AuthProider.jsx';
import { router } from './Compnontes/MainPage/Router/Router.jsx';
const queryClient = new QueryClient()

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)

