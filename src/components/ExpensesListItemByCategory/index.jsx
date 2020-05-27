import React from 'react';
import styles from './ExpensesListItemByCategory.module.css';
import PropTypes from 'prop-types';
const ExpensesListItemByCategory = ({ name, amount, icon }) => (
  <div className={styles.Item}>
    <p className={styles.Amount}>{amount}</p>
    <div className={styles.IconBack}>
      <img className={styles.Icon} src={icon} alt="" />
    </div>
    <p className={styles.Name}>{name}</p>
  </div>
);
ExpensesListItemByCategory.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default ExpensesListItemByCategory;
