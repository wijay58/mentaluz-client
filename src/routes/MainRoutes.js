import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// application - user social & account profile routing
const AppUserSocialProfile = Loadable(lazy(() => import('views/application/users/social-profile')));
const AppUserAccountProfile1 = Loadable(lazy(() => import('views/application/users/account-profile/Profile1')));
const AppUserAccountProfile2 = Loadable(lazy(() => import('views/application/users/account-profile/Profile2')));
const AppUserAccountProfile3 = Loadable(lazy(() => import('views/application/users/account-profile/Profile3')));

// application - user cards & list variant routing
const AppProfileCardStyle1 = Loadable(lazy(() => import('views/application/users/card/CardStyle1')));
const AppProfileCardStyle2 = Loadable(lazy(() => import('views/application/users/card/CardStyle2')));
const AppProfileCardStyle3 = Loadable(lazy(() => import('views/application/users/card/CardStyle3')));
const AppProfileListStyle1 = Loadable(lazy(() => import('views/application/users/list/Style1')));
const AppProfileListStyle2 = Loadable(lazy(() => import('views/application/users/list/Style2')));

// application routing
const AppChat = Loadable(lazy(() => import('views/application/chat')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// Menta pages
const Profile = Loadable(lazy(() => import('views/profile')));
const AISpecialists = Loadable(lazy(() => import('views/aiProfile/landing')));
const AIProfile = Loadable(lazy(() => import('views/aiProfile/index')));
const Chat = Loadable(lazy(() => import('views/chat')));
const Questionnaire = Loadable(lazy(() => import('views/questionnaire')));

const Success = Loadable(lazy(() => import('views/stripe/paymentSuccess')));
const Failed = Loadable(lazy(() => import('views/stripe/paymentFailed')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout path=":path" />
        </AuthGuard>
    ),
    children: [
        // pages
        {
          path: 'user/profile',
          element: <Profile />
        },
        {
          path: 'questionnaire',
          element: <Questionnaire />
        },
        {
          path: 'agent/aiSpecialists',
          element: <AISpecialists />
        },
        {
          path: 'agent/aiProfile',
          element: <AIProfile />
        },
        {
          path: 'agent/chat',
          element: <Chat />
        },
        {
          path: 'payment/success',
          element: <Success />
        },
        {
          path: 'payment/failed',
          element: <Failed />
        },
        {
            path: '/user/social-profile/:tab',
            element: <AppUserSocialProfile />
        },
        {
            path: '/user/account-profile/profile1',
            element: <AppUserAccountProfile1 />
        },
        {
            path: '/user/account-profile/profile2',
            element: <AppUserAccountProfile2 />
        },
        {
            path: '/user/account-profile/profile3',
            element: <AppUserAccountProfile3 />
        },

        {
            path: '/user/card/card1',
            element: <AppProfileCardStyle1 />
        },
        {
            path: '/user/card/card2',
            element: <AppProfileCardStyle2 />
        },
        {
            path: '/user/card/card3',
            element: <AppProfileCardStyle3 />
        },
        {
            path: '/user/list/list1',
            element: <AppProfileListStyle1 />
        },
        {
            path: '/user/list/list2',
            element: <AppProfileListStyle2 />
        },
        {
            path: '/app/chat',
            element: <AppChat />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
    ]
};

export default MainRoutes;
