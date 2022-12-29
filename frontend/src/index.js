import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './components';
import { Login } from './pages';
import { ContextProvider } from './contexts/Context';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={ myRouter } />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
