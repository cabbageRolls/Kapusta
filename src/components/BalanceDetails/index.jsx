import React from 'react';
import styles from './balanceDetails.module.css';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';

const BalanceDetails = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div
      className={
        Mobile
          ? styles.MobileContainer
          : Tablet
          ? styles.TabletContainer
          : styles.DesktopContainer
      }
    >
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
  );
};

export default BalanceDetails;
