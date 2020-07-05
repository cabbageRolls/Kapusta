import React from 'react';
import Styles from './setBalancePageMobile.module.css';
import GoToReportButton from '../../components/GoToReportsButton';
import SetBalanceForm from '../../components/SetBalanceForm';
import ExpensesList from '../../components/ExpensesList';
import AdditionButton from '../../components/AdditionalButton';

const SetBalansePage = () => {
  return (
    <div className={Styles.container}>
      <GoToReportButton />
      <SetBalanceForm />
      <ExpensesList />
      <AdditionButton />
    </div>
  );
};

export default SetBalansePage;
