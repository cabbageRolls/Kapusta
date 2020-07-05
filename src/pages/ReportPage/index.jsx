import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Styles from './ReportPage.module.css';
import BudgetSummary from '../../components/BudgetSummary';
import Header from '../../components/Header';
import ExpensesListByCategory from '../../components/ExpensesListByCategory';
import ExpensesListChart from '../../components/ExpensesChartBySpecificCategory';
import { isMobile, isTablet } from '../../services/mediaQuery';
import { getCurrentCategory } from '../../redux/selectors';

const ReportPage = () => {
  const currentCategory = useSelector(getCurrentCategory);
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <>
      <Header />
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
          {currentCategory.length && <ExpensesListChart />}
        </div>
      </div>
    </>
  );
};
export default ReportPage;
