// import React from 'react';
// import T from 'prop-types';
// import styles from './expensesListItem.module.css';
// import classLister from 'css-module-class-lister';
// import { useMediaQuery } from 'react-responsive';

// const classes = classLister(styles);

// const ExpensesListItem = ({ expenses }) => {
//   const isMobileDevice = useMediaQuery({
//     query: '(max-device-width: 768px)',
//   });

//   const isDesktopOrTablet = useMediaQuery({
//     query: '(min-device-width: 768px)',
//   });
//   return (
//     <>
//       {expenses && (
//         <div className={styles.container}>
//           <div className={styles.scrollbar}>
//             <ul className={styles.expensesList}>
//               {isDesktopOrTablet && (
//                 <div className={styles.title}>
//                   <div className={classes('titleItem', 'date')}>Дата</div>
//                   <div className={classes('titleItem', 'descr')}>Описание</div>
//                   <div className={classes('titleItem', 'category')}>
//                     Категория
//                   </div>
//                   <div className={classes('titleItem', 'amount')}>Сумма</div>
//                   <div className={classes('titleItem', 'delete')}></div>
//                 </div>
//               )}

//               {expenses.map(expense => (
//                 <li className={styles.item} key={expense.id}>
//                   {isMobileDevice ? (
//                     <>
//                       <div className={styles.expenseDateContainer}>
//                         <span className={styles.expenseCategory}>
//                           {expense.category}
//                         </span>
//                         <span className={styles.expenseDate}>
//                           {expense.date}
//                         </span>
//                       </div>
//                       <span className={styles.expenseDescription}>
//                         {expense.description}
//                       </span>

//                       <span className={styles.expenseAmount}>
//                         {expense.amount} грн.
//                       </span>
//                       <button className={styles.btn}>
//                         <span className={styles.btnIcon}></span>
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <div className={styles.expenseDateContainer}>
//                         <span className={styles.expenseDate}>
//                           {expense.date}
//                         </span>
//                       </div>
//                       <span className={styles.expenseDescription}>
//                         {expense.description}
//                       </span>
//                       <span className={styles.expenseCategory}>
//                         {expense.category}
//                       </span>
//                       <span className={styles.expenseAmount}>
//                         {expense.amount} грн.
//                       </span>
//                       <button className={styles.btn}>
//                         <span className={styles.btnIcon}></span>
//                       </button>
//                     </>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// ExpensesListItem.propTypes = {
//   expenses: T.arrayOf(
//     T.shape({
//       id: T.string.isRequired,
//       date: T.string.isRequired,
//       description: T.string.isRequired,
//       category: T.string.isRequired,
//       amount: T.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };
// export default ExpensesListItem;

import React from 'react';
import T from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  Mobile,
  Default,
  isMobile,
  isTablet,
  // Tablet,
  // isDesktop,
  // isNotMobile,
} from '../../../services/mediaQuery';

import styles from './expensesListItem.module.css';

const ExpensesListItem = ({ expenses }) => {
  const MobileClass = isMobile(useMediaQuery);
  const TabletClass = isTablet(useMediaQuery);
  // const DesktopClass = isDesktop(useMediaQuery);
  // const DefaultClass = isNotMobile(useMediaQuery);
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
              <Default>
                <div
                  className={
                    MobileClass
                      ? styles.Mobile_title
                      : TabletClass
                      ? styles.Tablet_title
                      : styles.Desktop_title
                  }
                >
                  <div className={styles.titleItem}>Дата</div>
                  <div className={styles.titleItem}>Описание</div>
                  <div className={styles.titleItem}>Категория</div>
                  <div className={styles.titleItem}>Сумма</div>
                </div>
              </Default>

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
                  <div className={styles.expenseDateContainer}>
                    <Mobile>
                      <span
                        className={
                          MobileClass
                            ? styles.Mobile_expenseCategory
                            : TabletClass
                            ? styles.Tablet_expenseCategory
                            : styles.Desktop_expenseCategory
                        }
                      >
                        {expense.category}
                      </span>
                    </Mobile>
                    <span className={styles.expenseDate}>{expense.date}</span>
                  </div>
                  <span className={styles.expenseDescription}>
                    {expense.description}
                  </span>

                  <Default>
                    <span className={styles.expenseCategory}>
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
                    <span className={styles.btnIcon}> </span>
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
