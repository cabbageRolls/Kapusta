import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import ExpensesListItem from './ExpensesListItem/expensesListItem';
import { getCosts, getIncomes } from '../../redux/selectors';
import {
  fetchCosts,
  deleteCost,
} from '../../redux/operations/costsOperations/costs';

class ExpensesList extends Component {
  static propTypes = {
    onFetchTransactions: T.func.isRequired,
  };

  render() {
    const { costsData, incomeData, onDeleteCost } = this.props;
    return (
      <ExpensesListItem
        expenses={costsData}
        incomes={incomeData}
        deleteCost={onDeleteCost}
      />
    );
  }
}

const mstp = state => ({
  costsData: getCosts(state),
  incomeData: getIncomes(state),
});

const mdtp = dispatch => ({
  onFetchTransactions: () => dispatch(fetchCosts()),
  onDeleteCost: id => dispatch(deleteCost(id)),
});

export default connect(mstp, mdtp)(ExpensesList);
