import React from 'react';
import PropTypes from 'prop-types';
import { Default } from '../../services/mediaQuery';
import Styles from './MonthPicker.module.css';
const Icon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 17l5-5-5-5v10z" />
    <path fill="none" d="M0 24V0h24v24H0z" />
  </svg>
);
const index = ({ month = 'сентябрь', year = '2020', increment, decrement }) => {
  return (
    <div className={Styles.container}>
      <Default>
        <h4 className={Styles.title}>Текущий период:</h4>
      </Default>
      <div className={Styles.wrapper}>
        <button className={Styles.button} onClick={decrement}>
          <Icon className={Styles.svgLeft} />
        </button>
        <div className={Styles.data}>
          {month} {year}
        </div>
        <button className={Styles.button} onClick={increment}>
          <Icon className={Styles.svg} />
        </button>
      </div>
    </div>
  );
};
index.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
export default index;
