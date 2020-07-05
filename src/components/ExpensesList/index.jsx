import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import ExpensesListItem from './ExpensesListItem/expensesListItem';
import { getCosts } from '../../redux/selectors';
import {
  fetchCosts,
  deleteCost,
} from '../../redux/operations/costsOperations/costs';

class ExpensesList extends Component {
  static propTypes = {
    onFetchTransactions: T.func.isRequired,
  };

  render() {
    const { costsData, onDeleteCost } = this.props;
    return <ExpensesListItem costs={costsData} deleteCost={onDeleteCost} />;
  }
}

const mstp = state => ({
  costsData: getCosts(state),
});

const mdtp = dispatch => ({
  onFetchTransactions: () => dispatch(fetchCosts()),
  onDeleteCost: id => dispatch(deleteCost(id)),
});

export default connect(mstp, mdtp)(ExpensesList);
