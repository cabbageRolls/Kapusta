import React from 'react';
import PropTypes from 'prop-types';
import ExpensesListItem from './ExpensesListItem/expensesListItem';

export default class ExpensesList extends React.Component {
  static propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    data: this.props.expenses,
  };

  render() {
    const { data } = this.state;
    return <ExpensesListItem expenses={data} />;
  }
}
