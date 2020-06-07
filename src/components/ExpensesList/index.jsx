import React from 'react';
import ExpensesListItem from './ExpensesListItem/expensesListItem';
import expensesData from './expensesData.json';

export default class ExpensesList extends React.Component {
  static defaultProps = {
    expenses: [],
  };

  state = {};

  render() {
    return <ExpensesListItem />;
  }
}
