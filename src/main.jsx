import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PropertyListPage from './pages/PropertyListPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/properties',
        element: <PropertyListPage />,
      },
      {
        path: '/properties/:id',
        element: <PropertyDetailPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/aboutus',
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
