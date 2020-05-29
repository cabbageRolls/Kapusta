import React from 'react';
import Styles from './ReportPage.module.css';
import BudgetSummary from '../../components/BudgetSummary';
import ExpensesListByCategory from '../../components/ExpensesListByCategory';
import ExpensesListChart from '../../components/ExpensesChartBySpecificCategory';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';

const ReportPage = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div className={Mobile ? Styles.MobileContainer : Styles.TabletContainer}>
      <div className={Styles.BudgetMobileContainer}>
        <BudgetSummary />
      </div>
      <div className={Styles.ExpensesMobileContainer}>
        <ExpensesListByCategory />
      </div>
      <div
        className={
          Mobile
            ? Styles.ChartMobileContainer
            : Tablet
            ? Styles.ChartTabletContainer
            : Styles.ChartDesktopContainer
        }
      >
        <ExpensesListChart />
      </div>
    </div>
  );
};
export default ReportPage;
