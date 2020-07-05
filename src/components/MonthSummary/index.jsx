import React, { useEffect, useState } from 'react';
import Styles from './MonthSummary.module.css';
import { useSelector } from 'react-redux';
import {
  getCostsStatistic,
  getIncomesStatistic,
} from '../../redux/selectors';

const MonthSummary = () => {
  const dataCost = useSelector(getCostsStatistic);
  const dataIncome = useSelector(getIncomesStatistic);
  const isExpenses = useSelector(store => store.isExpenses);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!dataCost) return;
    if (!dataIncome) return;

    if (isExpenses) {
      setData(dataCost);
      return;
    }
    setData(dataIncome);
  }, [dataCost, dataIncome, isExpenses]);

  return (
    <div className={Styles.container}>
      <h4 className={Styles.title}>СВОДКА</h4>
      <ul className={Styles.list}>
        {data.map(item => (
          <li key={item.id} className={Styles.item}>
            <span>{item.month}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MonthSummary;
