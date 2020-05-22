import React from 'react';

import { useMediaQuery } from 'react-responsive';
import {
  isMobile,
  isNotMobile,
  // isTablet,
  // isDesktop,
} from '../../services/mediaQuery';

import MonthPicker from '../MonthPicker';
import TotalBalanceInfo from '../TotalBalanceInfo';
import BalanceDetails from '../BalanceDetails';
import styles from './BudgetSummary.module.css';

const BudgetSummary = () => {
  const Mobile = isMobile(useMediaQuery);
  // const Tablet = isTablet(useMediaQuery);
  // const Desktop = isDesktop(useMediaQuery);
  const Default = isNotMobile(useMediaQuery);
  return (
    <div className ={styles.BudgetSummaryContainer}>
      <div
        className={
          Mobile
            ? styles.boxTotalMonthMobile
            : Default && styles.boxTotalMonthTablet
        }
      >
        <div className={styles.MonthPicker}>
          <MonthPicker />
        </div>
        <TotalBalanceInfo />
      </div>
      <BalanceDetails />
    </div>
  );
};

export default BudgetSummary;
