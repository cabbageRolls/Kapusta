/* eslint-disable import/first */
/* eslint-disable import/order */
import React from 'react';
// Временная заглушка пока нет регистрации начало
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTransactions from '../redux/operations/transactions';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDg5ZmIzMTcyZWU3MTJlOTFhMGZmMiIsImlhdCI6MTU5MTI1NDk2NH0.kVS-3m5n2bVnDtNhxWhX9iSZ7QPnhr0DaiSm1eWp4HA';
// Временная заглушка пока нет регистрации конец
import '../CSS/normilize.css';
import '../CSS/index.css';
// import SetBalanceForm from './SetBalanceForm';
import ReportPage from '../pages/ReportPage';

// import MainPage from '../pages/MainPage';
import ExpensesComponents from './ExpensesComponents';

function App({ init }) {
  init();
  return (
    <>
      <ExpensesComponents />
      {/* <ReportPage /> */}
      {/* <SetBalanceForm /> */}
      {/* <MainPage /> */}
    </>
  );
}
App.propTypes = {
  init: PropTypes.func.isRequired,
};
const MDTP = {
  init: getTransactions,
};
export default connect(null, MDTP)(App);
