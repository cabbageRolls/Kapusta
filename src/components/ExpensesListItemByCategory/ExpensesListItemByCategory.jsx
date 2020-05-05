import React from 'react';
import styles from './ExpensesListItemByCategory.module.css';

const ExpensesListItemByCategory = ({ name, amount, icon }) => (
  <div className={styles.Item}>
    <p className={styles.Amount}>{amount}</p>
    <div className={styles.IconBack}>
      <img className={styles.Icon} src={icon} alt="" />
    </div>
    <p className={styles.Name}>{name}</p>
  </div>
);

export default ExpensesListItemByCategory;
