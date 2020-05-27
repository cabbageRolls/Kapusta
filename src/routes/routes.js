import React from 'react';

// <<<<<<<=============Уточнить насчет компонентов=============>>>>>>>>>>>

const AUTH_PAGE = React.lazy(() =>
  import('../pages/AuthPage' /* webpackChunkName: "AUTH_PAGE" */),
);

const LOGIN = React.lazy(() =>
  import('../components/AuthForm' /* webpackChunkName: "LOGIN" */),
);

const REGISTER = React.lazy(() =>
  import('../components/AuthForm' /* webpackChunkName: "REGISTER" */),
);

const DASHBOARD_PAGE = React.lazy(() =>
  import('../components/AuthForm' /* webpackChunkName: "DASHBOARD_PAGE" */),
);


const REPORT_PAGE = React.lazy(() =>
  import('../components/AuthForm' /* webpackChunkName: "REPORT_PAGE" */),
);

export default {
  AUTH_PAGE:{
    path:'/auth',
    component:AUTH_PAGE
  },
  LOGIN: {
    path: '/auth/login',
    component: LOGIN, // Уточнить насчет компонента
  },
  REGISTER: {
    path: '/auth/register',
    component: RegistrationPage, // Уточнить насчет компонента
  },
  DASHBOARD_PAGE: {
    path: '/',
    component: DashboardPage, // Уточнить насчет компонента
  },
  REPORT_PAGE: {
    path: '/',
    component: DashboardPage, // Уточнить насчет компонента
  },
};
