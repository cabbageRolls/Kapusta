import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styles from './ReportPage.module.css';
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
      <div className={Mobile ? styles.MobileContainer : styles.TabletContainer}>
        <div className={styles.reportWrapperBg}></div>
        <div className={styles.BudgetMobileContainer}>
          <BudgetSummary />
        </div>
        <div className={styles.ExpensesMobileContainer}>
          <ExpensesListByCategory />
        </div>
        <div
          className={
            Mobile
              ? styles.ChartMobileContainer
              : Tablet
              ? styles.ChartTabletContainer
              : styles.ChartDesktopContainer
          }
        >
          {currentCategory !== '' && <ExpensesListChart />}
        </div>
        <div className={styles.cabbageBack}></div>
      </div>
    </>
  );
};
export default ReportPage;
