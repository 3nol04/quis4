import React from 'react';
import ReactDOM from 'react-dom/client';
import product from './pages/products.jsx';
import Register from './pages/register.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx';
import Product from './pages/products.jsx';
import Corosel from './pages/corosel.jsx';


const router = createBrowserRouter([

  {
    path: '/App',
    element: <Product/>,
  },

  {
    path: '/Register',
    element: <Register/>,
  },
  {
    element: <LoginPage/>,
      path: '/Login',
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
