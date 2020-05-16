import React from 'react';
import T from 'prop-types';
import styles from './expensesListItem.module.css';
import classLister from 'css-module-class-lister';
import { useMediaQuery } from 'react-responsive';

const classes = classLister(styles);

const ExpensesListItem = ({ expenses }) => {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 768px)',
  });

  const isDesktopOrTablet = useMediaQuery({
    query: '(min-device-width: 768px)',
  });
  return (
    <>
      {expenses && (
        <div className={styles.container}>
          <div className={styles.scrollbar}>
            <ul className={styles.expensesList}>
              {isDesktopOrTablet && (
                <div className={styles.title}>
                  <div className={classes('titleItem', 'date')}>Дата</div>
                  <div className={classes('titleItem', 'descr')}>Описание</div>
                  <div className={classes('titleItem', 'category')}>
                    Категория
                  </div>
                  <div className={classes('titleItem', 'amount')}>Сумма</div>
                  <div className={classes('titleItem', 'delete')}></div>
                </div>
              )}

              {expenses.map(expense => (
                <li className={styles.item} key={expense.id}>
                  {isMobileDevice ? (
                    <>
                      <div className={styles.expenseDateContainer}>
                        <span className={styles.expenseCategory}>
                          {expense.category}
                        </span>
                        <span className={styles.expenseDate}>
                          {expense.date}
                        </span>
                      </div>
                      <span className={styles.expenseDescription}>
                        {expense.description}
                      </span>

                      <span className={styles.expenseAmount}>
                        {expense.amount} грн.
                      </span>
                      <button className={styles.btn}>
                        <span className={styles.btnIcon}></span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className={styles.expenseDateContainer}>
                        <span className={styles.expenseDate}>
                          {expense.date}
                        </span>
                      </div>
                      <span className={styles.expenseDescription}>
                        {expense.description}
                      </span>
                      <span className={styles.expenseCategory}>
                        {expense.category}
                      </span>
                      <span className={styles.expenseAmount}>
                        {expense.amount} грн.
                      </span>
                      <button className={styles.btn}>
                        <span className={styles.btnIcon}></span>
                      </button>
                    </>
                  )}
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
      amount: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ExpensesListItem;
