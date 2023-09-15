import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

import authProvider from './AuthProvider';
import { app } from './firebase/index'

// ----------------------------------------------------------------------

export default function Router() {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  const routes = useRoutes(authProvider([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
      isProtected:true
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ]
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ], user));

  return routes;
}
