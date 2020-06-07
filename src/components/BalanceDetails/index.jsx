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
      <div className={Mobile ? styles.ExpensesMobile : styles.ExpensesTablet}>
        <span>Расходы:</span>
        <span
          className={
            Mobile ? styles.ExpensesNumberMobile : styles.ExpensesNumberTablet
          }
        >
          - 18,000.00 грн
        </span>
      </div>
      <div className={Mobile ? styles.IncomeMobile : styles.IncomeTablet}>
        <span>Доходы:</span>
        <span
          className={
            Mobile ? styles.IncomeNumberMobile : styles.IncomeNumberTablet
          }
        >
          + 45,000.00 грн
        </span>
      </div>
    </div>
  );
};

export default BalanceDetails;
