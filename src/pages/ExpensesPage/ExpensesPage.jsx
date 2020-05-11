import React from 'react';
import styles from './ExpensesPage.module.css';

import DatePicker from '../../components/datePicker/index';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import ExpensesList from '../../components/ExpensesList/index';
import MonthSummary from '../../components/MonthSummary/Index';
import data from '../../components/MonthSummary/month.json';

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
        <MonthSummary data={data} />
      </div>
    </div>
  </div>
);

export default ExpensesPage;
