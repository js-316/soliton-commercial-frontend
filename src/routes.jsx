import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// pages
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Logout from './pages/Logout';
import RequireAuth from './components/RequireAuth';
// client acquisition pages
import Prospecting from './pages/client-acquisition/Prospecting';
import Proposal from './pages/client-acquisition/Proposal';
import Negotiations from './pages/client-acquisition/Negotiations';
import ClosedLost from './pages/client-acquisition/ClosedLost';
import ClosedWon from './pages/client-acquisition/ClosedWon';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/dashboard',
      element: <RequireAuth />,
      children: [
        {
          path: '',
          element: <DashboardLayout />,
          children: [
            { path: 'app', element: <DashboardApp /> },
            { path: 'user', element: <User /> },
            { path: 'products', element: <Products /> },
            { path: 'blog', element: <Blog /> },
            { path: 'logout', element: <Logout /> },
            // Client Acquisition routes
            { path: 'client-acquisition/prospecting', element: <Prospecting /> },
            { path: 'client-acquisition/proposal', element: <Proposal /> },
            { path: 'client-acquisition/negotiations', element: <Negotiations /> },
            { path: 'client-acquisition/closed-lost', element: <ClosedLost /> },
            { path: 'client-acquisition/closed-won', element: <ClosedWon /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}