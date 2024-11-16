import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import PropertyListPage from './pages/PropertyListPage.jsx';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import EditPropertyPage from './pages/EditPropertyPage.jsx';
import CreatePropertyPage from './pages/CreatePropertyPage.jsx';
import './index.css';
import Register from './components/Register.jsx';

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
        path: '/properties/:id/edit',
        element: <EditPropertyPage />,
      },
      {
        path: '/new-property',
        element: <CreatePropertyPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/aboutus',
        element: <AboutPage />,
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
