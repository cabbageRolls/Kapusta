import React from 'react';
import Styles from './setBalancePageMobile.module.css';
import GoToReportButton from '../../components/GoToReportsButton';
import SetBalanceForm from '../../components/SetBalanceForm';
import ExpensesList from '../../components/ExpensesList';
import AdditionButton from '../../components/AdditionalButton';

export default class SetBalansePage extends React.Component {
  state = {};

  render() {
    return (
      <div className={Styles.container}>
        <GoToReportButton />
        <SetBalanceForm />
        <ExpensesList />
        <AdditionButton />
      </div>
    );
  }
}
