import { lazy } from 'react';
import { useRoutes, Navigate, useNavigate } from 'react-router-dom';

// routes
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const navigate = useNavigate();
  return useRoutes([
    {
      path: '/',
      element:
        <AuthGuard>
          <MainLayout>
            <Navigate to='/dashboard' replace />
          </MainLayout>
        </AuthGuard>
    },
    AuthenticationRoutes,
    LoginRoutes,
    MainRoutes
  ]);
}
