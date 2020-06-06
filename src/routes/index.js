import React from 'react';

const AUTH_PAGE = React.lazy(() =>
  import('../pages/AuthPage' /* webpackChunkName: "AUTH_PAGE" */),
);

const MAIN_PAGE = React.lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "MAIN_PAGE" */),
);

// const REPORT_PAGE = React.lazy(() =>
//   import('../pages/ReportPage' /* webpackChunkName: "REPORT_PAGE" */),
// );

const REPORT_PAGE = React.lazy(() =>
  import('../pages/ReportPage' /* webpackChunkName: "REPORT_PAGE" */),
);
const SET_BALANCE_PAGE_MOBILE = React.lazy(() =>
  import(
    '../pages/SetBalancePageMobile' /* webpackChunkName: "SET_BALANCE_PAGE_MOBILE" */
  ),
);

const SET_EXPENSES_PAGE_MOBILE = React.lazy(() =>
  import(
    '../pages/SetExpensesPageMobile' /* webpackChunkName: "SET_EXPENSES_PAGE_MOBILE" */
  ),
);
const SET_INCOME_PAGE_MOBILE = React.lazy(() =>
  import(
    '../pages/SetIncomePageMobile' /* webpackChunkName: "SET_INCOME_PAGE_MOBILE" */
  ),
);

export default {
  AUTH_PAGE: {
    path: 'auth',
    component: AUTH_PAGE,
  },
  MAIN_PAGE: {
    path: '/', // redirect to exp_page
    component: MAIN_PAGE,
  },
  EXPENSES: {
    path: '/expenses',
    component: 1,
  },
  INCOME: {
    path: '/income',
    component: 1,
  },
  REPORT_PAGE: {
    path: '/report',
    component: REPORT_PAGE,
  },

  SET_BALANCE_PAGE_MOBILE: {
    path: '/balance',
    component: SET_BALANCE_PAGE_MOBILE,
  },
  SET_EXPENSES_PAGE_MOBILE: {
    path: '/expenses-form',
    component: SET_EXPENSES_PAGE_MOBILE,
  },
  SET_INCOME_PAGE_MOBILE: {
    path: '/income-form',
    component: SET_INCOME_PAGE_MOBILE,
  },
};
