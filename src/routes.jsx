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
// import RequireAuth from './components/RequireAuth'; // Comment out or remove this line
// client acquisition pages
import Prospecting from './pages/client-acquisition/Prospecting';
import Proposal from './pages/client-acquisition/Proposal';
import Negotiations from './pages/client-acquisition/Negotiations';
import ClosedLost from './pages/client-acquisition/ClosedLost';
import ClosedWon from './pages/client-acquisition/ClosedWon';
// onboarding pages
import SignedContract from './pages/onboarding/SignedContract';
import DirectiveCeoCco from './pages/onboarding/Onboarding';
import Lpo from './pages/onboarding/Lpo';
import PaymentTerms from './pages/onboarding/PaymentTerms';
import PaymentStatus from './pages/onboarding/OnboardedDeals';
import Product from './pages/onboarding/Product';
import Revenue from './pages/onboarding/Revenue.jsx';
import RegisterDeal from './pages/client-acquisition/RegisterDeal';
import CreateQuotation from './pages/client-acquisition/CreateQuotation';
import Onboarding from './pages/onboarding/Onboarding';
import OnboardedDeals from './pages/onboarding/OnboardedDeals';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        // { path: '/', element: <Navigate to="/login" /> },
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/dashboard',
      // element: <RequireAuth />,
      element: <DashboardLayout />,
      children: [
        {
          path: 'app',
          element: <DashboardApp />,
        },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'logout', element: <Logout /> },
        // Client Acquisition routes
        { path: 'client-acquisition/prospecting', element: <Prospecting /> },
        {path: 'client-acquisition/prospecting/register', element: <RegisterDeal />},
        { path: 'client-acquisition/proposal', element: <Proposal /> },
        {path: 'client-acquisition/proposal/create', element: <CreateQuotation />},
        { path: 'client-acquisition/negotiations', element: <Negotiations /> },
        { path: 'client-acquisition/closed-lost', element: <ClosedLost /> },
        { path: 'client-acquisition/closed-won', element: <ClosedWon /> },
        // Onboarding routes
        {path: 'onboarding/on', element: <Onboarding />},
        {path: 'onboarding/deals', element: <OnboardedDeals />},
        { path: 'onboarding/signed-contract', element: <SignedContract /> },
        { path: 'onboarding/directive-ceo-cco', element: <DirectiveCeoCco /> },
        { path: 'onboarding/lpo', element: <Lpo /> },
        { path: 'onboarding/payment-terms', element: <PaymentTerms /> },
        { path: 'onboarding/payment-status', element: <PaymentStatus /> },
        { path: 'onboarding/product', element: <Product /> },
        { path: 'onboarding/revenue', element: <Revenue /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}