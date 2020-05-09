import React from 'react';
import styles from './balanceDetails.module.css';

const BalanceDetails = () => {
  return (
    <div className={styles.balanceDetailsContainer}>
      <div className={styles.balanceDetails}>
        <div className={styles.expenses}>
          <span>Расходы:</span>
          <span className={styles.expensesNumber}>- 18,000.00 грн</span>
        </div>

        <div className={styles.line}></div>
        <div className={styles.income}>
          <span>Доходы:</span>
          <span className={styles.incomeNumber}>+ 45,000.00 грн</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceDetails;
