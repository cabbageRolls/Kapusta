import React from 'react';
import styles from './setBalancePageMobile.module.css';
import GoToReportButton from '../../components/GoToReportsButton';
import SetBalanceForm from '../../components/SetBalanceForm';
import ExpensesList from '../../components/ExpensesList';
import AdditionButton from '../../components/AdditionalButton';
import Header from '../../components/Header';

const SetBalansePage = () => (
  <div className={styles.setBalancePageWrapper}>
    <Header />
    <div className={styles.container}>
      <GoToReportButton />
      <SetBalanceForm />
      <ExpensesList />
      <AdditionButton />
    </div>
  </div>
);
export default SetBalansePage;
