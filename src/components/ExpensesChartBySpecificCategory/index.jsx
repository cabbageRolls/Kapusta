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
index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default index;
