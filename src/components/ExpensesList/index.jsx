import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import ExpensesListItem from './ExpensesListItem/expensesListItem';
import { getCosts } from '../../redux/selectors';
import * as operations from '../../redux/operations/costs';

class ExpensesList extends Component {
  static propTypes = {
    fetchCostsData: T.func.isRequired,
    costsData: T.func.isRequired,
  };

  componentDidMount() {
    const { fetchCostsData } = this.props;
    fetchCostsData();
  }

  render() {
    const { costsData, deleteCost } = this.props;
    return <ExpensesListItem costs={costsData} deleteCost={deleteCost} />;
  }
}

const mstp = state => ({
  costsData: getCosts(state),
});

const mdtp = {
  fetchCostsData: operations.fetchCosts,
  deleteCost: operations.deleteCost,
};

export default connect(mstp, mdtp)(ExpensesList);
