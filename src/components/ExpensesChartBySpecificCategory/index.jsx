import React from 'react';
import { useSelector } from 'react-redux';
import ExpensesChartBySpecificCategory from './ExpensesChartBySpecificCategory';
import { Mobile, Tablet, Desktop } from '../../services/mediaQuery';
import Styles from './index.module.css';
import { getDataCharts } from '../../redux/selectors';

const MyChart = () => {
  const dataByCurrentCategory = useSelector(getDataCharts);
  return (
    <div className={Styles.section}>
      {dataByCurrentCategory && dataByCurrentCategory.length > 0 ? (
        <>
          <Mobile>
            <ExpensesChartBySpecificCategory
              data={dataByCurrentCategory}
              isMobile
            />
          </Mobile>
          <Tablet>
            <ExpensesChartBySpecificCategory data={dataByCurrentCategory} />
          </Tablet>
          <Desktop>
            <ExpensesChartBySpecificCategory data={dataByCurrentCategory} />
          </Desktop>
        </>
      ) : (
        <div>Вы не заполнили эту категорию</div>
      )}
    </div>
  );
};
export default MyChart;
