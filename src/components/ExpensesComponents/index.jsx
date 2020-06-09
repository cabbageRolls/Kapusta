import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DatePicker from '../DatePicker';
import ExpensesForm from '../ExpensesForm';
import ActionButton from '../ActionButton';
import ExpensesList from '../ExpensesList';
import MonthSummary from '../MonthSummary';
import Styles from './index.module.css';
import * as MQ from '../../services/mediaQuery';

const ExpensesComponents = () => {
  const IsTablet = MQ.isTablet(useMediaQuery);
  return (
    <section className={IsTablet ? Styles.section : Styles.D_section}>
      <div className={Styles.head}>
        <div className={Styles.DatePicker}>
          <DatePicker />
        </div>
        <div
          className={
            IsTablet ? Styles.ExpensesSection : Styles.D_ExpensesSection
          }
        >
          <div
            className={IsTablet ? Styles.ExpensesForm : Styles.D_ExpensesForm}
          >
            <ExpensesForm />
          </div>
          <div
            className={IsTablet ? Styles.ActionButton : Styles.D_ActionButton}
          >
            <ActionButton />
          </div>
        </div>
      </div>
      <div className={IsTablet ? Styles.main : Styles.D_main}>
        <div className={IsTablet ? Styles.ExpensesList : Styles.D_ExpensesList}>
          <ExpensesList />
        </div>
        <div className={IsTablet ? Styles.MonthSummary : Styles.D_MonthSummary}>
          <MonthSummary />
        </div>
      </div>
    </section>
  );
};
export default ExpensesComponents;
