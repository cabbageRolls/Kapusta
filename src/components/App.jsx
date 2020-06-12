/* eslint-disable import/first */
/* eslint-disable import/order */
import React, { Suspense } from 'react';
// Временная заглушка пока нет регистрации начало
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTransactions from '../redux/operations/transactions';
import { loader } from '../redux/selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import ExpensesList from 'react-router-dom';
import routes from '../routes';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDg5ZmIzMTcyZWU3MTJlOTFhMGZmMiIsImlhdCI6MTU5MTI1NDk2NH0.kVS-3m5n2bVnDtNhxWhX9iSZ7QPnhr0DaiSm1eWp4HA';
// Временная заглушка пока нет регистрации конец
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

function App({ isLoading, isAuth = true }) {
  const Mobile = isMobile(useMediaQuery);
  return (
    <>
      <Switch>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Route
            exact
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
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
      {isLoading && <Loader />}

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
  isLoading: loader(store),
});
export default connect(MSTP, MDTP)(App);
