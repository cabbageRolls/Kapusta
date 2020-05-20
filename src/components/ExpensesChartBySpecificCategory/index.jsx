import React from 'react';
import PropTypes from 'prop-types';
import ExpensesChartBySpecificCategory from './ExpensesChartBySpecificCategory';
import { Mobile, Tablet, Desktop } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ data }) => (
  <div className={Styles.section}>
    <Mobile>
      <ExpensesChartBySpecificCategory data={data} isMobile currency="грн" />
    </Mobile>
    <Tablet>
      <ExpensesChartBySpecificCategory data={data} currency="грн" />
    </Tablet>
    <Desktop>
      <ExpensesChartBySpecificCategory data={data} currency="грн" />
    </Desktop>
  </div>
);
index.defaultProps = {
  data: [
    { name: 'chery', cost: '2500' },
    { name: 'bacon', cost: '4500' },
    { name: 'tomato', cost: '500' },
    { name: 'chery', cost: '5500' },
    { name: 'bacon', cost: '4100' },
    { name: 'tomato', cost: '300' },
    { name: 'chery', cost: '2000' },
    { name: 'bacon', cost: '1500' },
    { name: 'tomato', cost: '500' },
    { name: 'tomato', cost: '200' },
  ],
};
index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
export default index;
