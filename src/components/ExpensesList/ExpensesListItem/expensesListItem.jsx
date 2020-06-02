import React from 'react';
import T from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  Mobile,
  Default,
  isMobile,
  isTablet,
} from '../../../services/mediaQuery';

import styles from './expensesListItem.module.css';

const ExpensesListItem = ({ expenses }) => {
  const MobileClass = isMobile(useMediaQuery);
  const TabletClass = isTablet(useMediaQuery);
  return (
    <>
      {expenses && (
        <div
          className={
            MobileClass
              ? styles.Mobile_container
              : TabletClass
              ? styles.Tablet_container
              : styles.Desktop_container
          }
        >
          <Default>
            <div
              className={TabletClass ? styles.Tablet_item : styles.Desktop_item}
            >
              <div className={styles.titleItem}>Дата</div>
              <div className={styles.titleItem}>Описание</div>
              <div className={styles.titleItem}>Категория</div>
              <div className={styles.titleItem}>Сумма</div>
              <div className={styles.titleItem} />
            </div>
          </Default>
          <div
            className={
              MobileClass
                ? styles.Mobile_scrollbar
                : TabletClass
                ? styles.Tablet_scrollbar
                : styles.Desktop_scrollbar
            }
          >
            <ul
              className={
                MobileClass
                  ? styles.Mobile_expensesList
                  : TabletClass
                  ? styles.Tablet_expensesList
                  : styles.Desktop_expensesList
              }
            >
              {expenses.map(expense => (
                <li
                  className={
                    MobileClass
                      ? styles.Mobile_item
                      : TabletClass
                      ? styles.Tablet_item
                      : styles.Desktop_item
                  }
                  key={expense.id}
                >
                  <Mobile>
                    <div className={styles.expenseDateContainer}>
                      <span className={styles.expenseCategory}>
                        {expense.category}
                      </span>
                      <div className={styles.mobileWrapp}>
                        <span className={styles.expenseDate}>
                          {expense.date}
                        </span>
                        <span className={styles.expenseDescription}>
                          {expense.description}
                        </span>
                      </div>
                    </div>
                  </Mobile>
                  <Default>
                    <span className={styles.DexpenseDate}>{expense.date}</span>
                    <span className={styles.expenseDescription}>
                      {expense.description}
                    </span>
                    <span className={styles.Tablet_expenseCategory}>
                      {expense.category}
                    </span>
                  </Default>
                  <span
                    className={
                      MobileClass
                        ? styles.Mobile_expenseAmount
                        : TabletClass
                        ? styles.Tablet_expenseAmount
                        : styles.Desktop_expenseAmount
                    }
                  >
                    {expense.amount} грн.
                  </span>
                  <button className={styles.btn} type="button">
                    <span
                      className={
                        MobileClass ? styles.btnIcon : styles.defBtnIcon
                      }
                    >
                      {' '}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
ExpensesListItem.propTypes = {
  expenses: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      date: T.string.isRequired,
      description: T.string.isRequired,
      category: T.string.isRequired,
      amount: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ExpensesListItem;
