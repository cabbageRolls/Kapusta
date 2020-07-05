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

const ExpensesListItem = ({ costs, deleteCost }) => {
  const MobileClass = isMobile(useMediaQuery);
  const TabletClass = isTablet(useMediaQuery);
  return (
    <>
      {costs && (
        <div
          className={
            MobileClass ? styles.Mobile_container : styles.Desktop_container
          }
        >
          <Default>
            <div
              className={
                TabletClass ? styles.Tablet_title : styles.Desktop_title
              }
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
              {costs.map(expense => (
                <li
                  className={
                    MobileClass
                      ? styles.Mobile_item
                      : TabletClass
                      ? styles.Tablet_item
                      : styles.Desktop_item
                  }
                  key={expense.costsId}
                >
                  <Mobile>
                    <div className={styles.expenseDateContainer}>
                      <span className={styles.expenseCategory}>
                        {expense.product.category.name}
                      </span>
                      <div className={styles.mobileWrapp}>
                        <span className={styles.expenseDate}>
                          {expense.date.slice(0, -14)}
                        </span>
                        <span className={styles.expenseDescription}>
                          {expense.product.name}
                        </span>
                      </div>
                    </div>
                  </Mobile>
                  <Default>
                    <span className={styles.DexpenseDate}>
                      {expense.date.slice(0, -14)}
                    </span>
                    <span className={styles.expenseDescription}>
                      {expense.product.name}
                    </span>
                    <span className={styles.Tablet_expenseCategory}>
                      {expense.product.category.name}
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
                    {expense.amount.toFixed(2)} грн.
                  </span>
                  <div>
                    <button
                      className={MobileClass ? styles.btn : styles.defBtn}
                      type="button"
                      onClick={() =>
                        deleteCost(`${expense.forDeleteId}/${expense.costsId}`)
                      }
                    >
                      <span className={styles.btnIcon} />
                    </button>
                  </div>
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
  costs: T.arrayOf(
    T.shape({
      costsId: T.string.isRequired,
      date: T.string.isRequired,
      amount: T.number.isRequired,
      product: T.shape({
        name: T.string.isRequired,
        category: T.shape({
          name: T.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
export default ExpensesListItem;
