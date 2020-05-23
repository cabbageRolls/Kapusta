import React from 'react';
import styles from './ReportPage.module.css';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import BudgetSummary from '../../components/BudgetSummary/index';
import ExpensesListByCategory from '../../components/ExpensesListByCategory/ExpensesListByCategory';
import ExpensesChartBySpecificCategory from '../../components/ExpensesChartBySpecificCategory/index';
const ReportPage = () => (
  <div className={styles.Wrapper}>
    <div className={styles.GoBackButton}>
      <GoBackButton />
    </div>
    <div className={styles.BudgetSummary}>
      <BudgetSummary />
    </div>
    <div className={styles.ExpensesList}>
      <ExpensesListByCategory />
    </div>
    <div className={styles.ExpensesChart}>
      <ExpensesChartBySpecificCategory
        data={[
          { name: 'chery', cost: '2500' },
          { name: 'chery', cost: '1500' },
          { name: 'chery', cost: '500' },
          { name: 'chery', cost: '300' },
          { name: 'chery', cost: '2500' },
          { name: 'chery', cost: '1500' },
          { name: 'chery', cost: '500' },
          { name: 'chery', cost: '300' },
          { name: 'chery', cost: '500' },
          { name: 'chery', cost: '300' },
        ]}
      />
    </div>
  </div>
);

export default ReportPage;
