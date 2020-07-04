import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import IncomeListItem from './IncomeListItem';
import { getCosts } from '../../redux/selectors';
import * as operations from '../../redux/operations/costs';

class IncomeList extends Component {
  static propTypes = {
    fetchCostsData: T.func.isRequired,
    costsData: T.shape(T.any).isRequired,
  };

  componentDidMount() {
    const { fetchCostsData } = this.props;
    fetchCostsData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.costsData === this.props.costsData) return;
    const { fetchCostsData } = this.props;
    fetchCostsData();
  }

  render() {
    const { costsData, deleteCost } = this.props;
    return <IncomeListItem costs={costsData} deleteCost={deleteCost} />;
  }
}

const mstp = state => ({
  costsData: getCosts(state),
});

const mdtp = {
  fetchCostsData: operations.fetchCosts,
  deleteCost: operations.deleteCost,
};

export default connect(mstp, mdtp)(IncomeList);
