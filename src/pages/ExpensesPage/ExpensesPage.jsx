import React from 'react';
import styles from './ExpensesPage.module.css';

import DatePicker from '../../components/datePicker/index';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import ExpensesList from '../../components/ExpensesList/index';
import MonthSummary from '../../components/MonthSummary/Index';

const ExpensesPage = () => (
  <div className={styles.WelcomingPage}>
    <DatePicker />
    <ExpensesForm />
    <ActionButton />
    <ExpensesList />
    <MonthSummary />
  </div>
);

export default ExpensesPage;
