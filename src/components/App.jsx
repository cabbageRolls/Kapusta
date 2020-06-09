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
import routes from '../routes';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDg5ZmIzMTcyZWU3MTJlOTFhMGZmMiIsImlhdCI6MTU5MTI1NDk2NH0.kVS-3m5n2bVnDtNhxWhX9iSZ7QPnhr0DaiSm1eWp4HA';
// Временная заглушка пока нет регистрации конец
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../services/mediaQuery';
import Loader from './Loader';
import Header from './Header';
import '../CSS/normilize.css';
import '../CSS/index.css';

// import SetBalanceForm from './SetBalanceForm';
import ReportPage from '../pages/ReportPage';
import Alert from './Alert';
// import MainPage from '../pages/MainPage';
import ExpensesComponents from './ExpensesComponents';

function App({ init, isLoading }) {
  init();
  const Mobile = isMobile(useMediaQuery);
  return (
    <>
      <Header />
      <Switch>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Route
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          ></Route>
          {/* <Redirect from={routes.MAIN_PAGE.path} to={routes.EXPENSES.path}/> */}
          <Route
            exact
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />

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
};

const MDTP = {
  init: getTransactions,
};
const MSTP = () => ({
  isLoading: loader,
});
export default connect(MSTP, MDTP)(App);
