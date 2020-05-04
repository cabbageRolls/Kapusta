/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Styles from './MonthPicker.module.css';

const index = ({ month, year, increment, decrement }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div className={Styles.container}>
      {isMobile ? '' : <h4 className={Styles.title}>Текущий период:</h4>}
      <div className={Styles.wrapper}>
        <button className={Styles.button} onClick={decrement}>
          <img
            className={[Styles.svg, Styles.svgLeft].join(' ')}
            src="./images/svg/arrow_right-24px.svg"
            alt="arrowLeft"
          />
        </button>
        <div className={Styles.data}>
          {month} {year}
        </div>
        <button className={Styles.button} onClick={increment}>
          <img
            className={Styles.svg}
            src="./images/svg/arrow_right-24px.svg"
            alt="arrowRigth"
          />
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
