import React from 'react';
import T from 'prop-types';
import styles from './expensesListItem.module.css';

const ExpensesListItem = ({ expenses }) => (
  <>
    {expenses && (
      <div className={styles.container}>
        <ul className={styles.expensesList}>
          <div className={styles.title}>
            <div className={styles.titleItem}>Дата</div>
            <div className={styles.titleItem}>Описание</div>
            <div className={styles.titleItem}>Категория</div>
            <div className={styles.titleItem}>Сумма</div>
          </div>
          {expenses.map(expense => (
            <li className={styles.item} key={expense.id}>
              <span className={styles.expense}>{expense.date}</span>
              <span className={styles.expense}>{expense.description}</span>
              <span className={styles.expense}>{expense.category}</span>
              <span className={styles.expenseAmount}>
                {expense.amount} грн.{' '}
                <button className={styles.btn}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    focusable="false"
                    class="undefined "
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                    <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
                  </svg>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>

      // <table className={styles.expensesTable}>
      //   <thead>
      //     <tr>
      //       <th>Дата</th>
      //       <th>Описание</th>
      //       <th>Категория</th>
      //       <th>Сумма</th>
      //     </tr>
      //   </thead>

      //   {expenses.map(expense => (
      //     <tbody key={expense.id}>
      //       <tr>
      //         <td>{expense.date}</td>
      //         <td>{expense.description}</td>
      //         <td>{expense.category}</td>
      //         <td>{expense.amount}</td>
      //         <td>
      //           <button className={styles.btn}>
      //             <svg
      //               width="24px"
      //               height="24px"
      //               viewBox="0 0 24 24"
      //               fill="#000000"
      //               focusable="false"
      //               class="undefined "
      //             >
      //               <path d="M0 0h24v24H0z" fill="none"></path>
      //               <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
      //               <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
      //             </svg>{' '}
      //           </button>
      //         </td>
      //       </tr>
      //     </tbody>
      //   ))}
      // </table>
    )}
  </>
);

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
