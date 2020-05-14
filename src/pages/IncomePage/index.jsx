import React from 'react';
import DatePicker from '../../components/datePicker/index';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import ExpensesList from '../../components/ExpensesList/index';
import MonthSummary from '../../components/MonthSummary/Index';
import styles from './index.module.css';
const data = [
  {
    id: 1,
    mounth: '16/2/2020',
    cost: '$532.90',
  },
  {
    id: 2,
    mounth: '17/7/2019',
    cost: '$398.16',
  },
  {
    id: 3,
    mounth: '30/9/2019',
    cost: '$323.94',
  },
  {
    id: 4,
    mounth: '5/5/2020',
    cost: '$717.73',
  },
  {
    id: 5,
    mounth: '6/2/2020',
    cost: '$254.42',
  },
  {
    id: 6,
    mounth: '23/12/2019',
    cost: '$258.92',
  },
  {
    id: 7,
    mounth: '3/11/2019',
    cost: '$195.94',
  },
  {
    id: 8,
    mounth: '11/2/2020',
    cost: '$144.88',
  },
  {
    id: 9,
    mounth: '4/5/2020',
    cost: '$677.34',
  },
  {
    id: 10,
    mounth: '1/8/2019',
    cost: '$148.12',
  },
];

const ExpensesPage = () => (
  <div className={styles.section}>
    <div className={styles.head}>
      <div className={styles.DatePicker}>
        <DatePicker />
      </div>
      <div className={styles.wrap}>
        <div className={styles.ExpensesForm}>
          <ExpensesForm />
        </div>
        <div className={styles.ActionButton}>
          <ActionButton />
        </div>
      </div>
    </div>
    <div className={styles.main}>
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
