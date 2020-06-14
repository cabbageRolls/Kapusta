import React from 'react';
import { useSelector } from 'react-redux';
import styles from './balanceDetails.module.css';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import {
  getMonthBalanceCosts,
  getMonthBalanceIncomes,
} from '../../redux/selectors';

const BalanceDetails = () => {
  const monthBalanceCosts = useSelector(getMonthBalanceCosts);
  const monthBalanceIncomes = useSelector(getMonthBalanceIncomes);
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
          {'- ' +
            monthBalanceCosts.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
            ' грн'}
        </span>
      </div>
      <div className={Mobile ? styles.IncomeMobile : styles.IncomeTablet}>
        <span>Доходы:</span>
        <span
          className={
            Mobile ? styles.IncomeNumberMobile : styles.IncomeNumberTablet
          }
        >
          {'+ ' +
            monthBalanceIncomes.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
            ' грн'}
        </span>
      </div>
    </div>
  );
};

export default BalanceDetails;
