import React, { Component } from 'react';
import { connect } from 'react-redux';
// import T from 'prop-types';
import IncomeListItem from './IncomeListItem';
import { getIncome } from '../../redux/selectors';
import deleteIncome from '../../redux/operations/incomeOperations/deleteIncome';
import { fetchCosts } from '../../redux/operations/costsOperations/costs';

class IncomeList extends Component {
  // static propTypes = {
  //   fetchCostsData: T.func.isRequired,
  //   costsData: T.shape(T.any).isRequired,
  // };

  render() {
    const { incomeData, onDeleteIncome } = this.props;
    return <IncomeListItem income={incomeData} deleteIncome={onDeleteIncome} />;
  }
}

const mstp = state => ({
  incomeData: getIncome(state),
});

const mdtp = dispatch => ({
  onDeleteIncome: id => dispatch(deleteIncome(id)),
  onFetchTransactions: () => dispatch(fetchCosts()),
});

export default connect(mstp, mdtp)(IncomeList);
