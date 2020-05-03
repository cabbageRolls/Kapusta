import React from 'react';
import styles from './ExpensesListItemByCategory.module.css';

const ExpensesListItemByCategory = ({ name, amount, icon }) => (
  <div className={styles.item}>
    <p className={styles.amount}>{amount}</p>
    <div className={styles.icon_back}>
      <img className={styles.icon} src={icon} alt="" />
    </div>
    <p className={styles.name}>{name}</p>
  </div>
);

export default ExpensesListItemByCategory;
