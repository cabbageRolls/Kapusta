/* eslint-disable import/first */
/* eslint-disable import/order */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
//
//
// Временная заглушка пока нет регистрации начало
// Не добавляйте код в заглушку вам же ее удалять как подключите логинизацию
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTransactions from '../redux/operations/transactions';
import { loader, isAuthenticated } from '../redux/selectors';
// import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTVjMzYyMDM5MzM4NTc0MDkxODdiMCIsImlhdCI6MTU5MjExNjA2N30.Xal3b19ACYtfECZROIL6vWZ7c7zsZqeEFA3SVhsPP0w';
// // Временная заглушка пока нет регистрации конец
// //
// //

import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../services/mediaQuery';
import Loader from './Loader';
import '../CSS/normilize.css';
import '../CSS/index.css';

// import SetBalanceForm from './SetBalanceForm';
import ReportPage from '../pages/ReportPage';
import Alert from './Alert';
// import MainPage from '../pages/MainPage';
import ExpensesComponents from './ExpensesComponents';

function App({ isLoading, isAuth }) {
  const Mobile = isMobile(useMediaQuery);
  return (
    <>
      <Switch>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Route
            // exact
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
          <Route
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
          <Route
            path={routes.REPORT_PAGE.path}
            component={routes.REPORT_PAGE.component}
          />
          {isAuth ? (
            Mobile ? (
              <Redirect to={routes.SET_BALANCE_PAGE_MOBILE.path} />
            ) : (
              <Redirect to={routes.EXPENSES.path} />
              // <Redirect to={routes.REPORT_PAGE.path} />
            )
          ) : (
            <Redirect to={routes.AUTH_PAGE.path} />
          )}
          {Mobile && (
            <>
              <Route
                path={routes.SET_BALANCE_PAGE_MOBILE.path}
                component={routes.SET_BALANCE_PAGE_MOBILE.component}
              />
              <Route
                path={routes.SET_EXPENSES_PAGE_MOBILE.path}
                component={routes.SET_EXPENSES_PAGE_MOBILE.component}
              />
              <Route
                path={routes.SET_INCOME_PAGE_MOBILE.path}
                component={routes.SET_INCOME_PAGE_MOBILE.component}
              />
            </>
          )}
        </Suspense>
      </Switch>
      {/* {isLoading && <Loader />} */}

      {/* <ExpensesComponents /> */}
      {/* <ReportPage /> */}
      {/* <SetBalanceForm /> */}
      {/* <MainPage /> */}
      <Alert />
    </>
  );
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const MDTP = {
  init: getTransactions,
};
const MSTP = store => ({
  isAuth: isAuthenticated(store),
  isLoading: loader(store),
});
export default connect(MSTP, MDTP)(App);
