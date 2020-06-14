import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../ExpensesListByCategory/ExpensesListByCategory.module.css';
import Item from '../ExpensesListItemByCategory';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import {
  getCostByPeriodAndCategories,
  realCategories,
  getCosts,
} from '../../redux/selectors';
import getRealCategories from '../../redux/operations/realCategories';
import getTransactions from '../../redux/operations/transactions';
import setCurrentCategory from '../../redux/operations/currentCategory';

const ExpensesListByCategory = () => {
  const dispatch = useDispatch();
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  const data = useSelector(getCostByPeriodAndCategories);
  const categories = useSelector(realCategories);
  const costs = useSelector(getCosts);
  useEffect(() => {
    if (costs.length) return;
    dispatch(getTransactions());
  }, [costs]);
  useEffect(() => {
    if (categories.length) return;
    dispatch(getRealCategories());
  }, [categories]);

  return (
    <div
      className={
        Mobile
          ? styles.ListBackground
          : Tablet
          ? styles.ListBackgroundTablet
          : styles.ListBackgroundDesktop
      }
    >
      <ul className={Mobile ? styles.ItemList : styles.ItemListTablet}>
        {data &&
          data.map(item => {
            console.log();
            return (
              <li className={Mobile ? styles.Item : styles.ItemTablet}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => dispatch(setCurrentCategory(item.name))}
                >
                  <Item
                    name={item.text}
                    amount={item.amount >= 0 && item.amount.toFixed(2)}
                    icon={item.icon}
                  />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ExpensesListByCategory;
