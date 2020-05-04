import React from 'react';
import Styles from './expensesList.module.css';
import ExpensesListItem from './ExpensesListItem/expensesListItem';
import expensesData from './expensesData.json';

export default class ExpensesList extends React.Component {
  state = {
    expense: false,
  };

  render() {
    return (
      <div className={Styles.container}>
        <ExpensesListItem expenses={expensesData} />
      </div>
    );
  }
}
