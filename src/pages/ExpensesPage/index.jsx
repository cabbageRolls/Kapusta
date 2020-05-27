import React from 'react';
import styles from './ExpensesPage.module.css';

import DatePicker from '../../components/DatePicker';
import ExpensesForm from '../../components/ExpensesForm';
import ActionButton from '../../components/ActionButton';
import ExpensesList from '../../components/ExpensesList';
import MonthSummary from '../../components/MonthSummary';

const ExpensesPage = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Form}>
      <div className={styles.DatePicker}>
        <DatePicker />
      </div>
      <div className={styles.ExpensesForm}>
        <ExpensesForm />
      </div>
      <div className={styles.ActionButton}>
        <ActionButton />
      </div>
    </div>
    <div className={styles.ExpensesListContainer}>
      <div className={styles.ExpensesList}>
        <ExpensesList />
      </div>
      <div className={styles.MonthSummary}>
        <MonthSummary />
      </div>
    </div>
  </div>
);

export default ExpensesPage;
