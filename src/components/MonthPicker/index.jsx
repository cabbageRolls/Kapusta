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
          <svg
            className={[Styles.svg, Styles.svgLeft].join(' ')}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 17l5-5-5-5v10z" />
            <path fill="none" d="M0 24V0h24v24H0z" />
          </svg>
        </button>
        <div className={Styles.data}>
          {month} {year}
        </div>
        <button className={Styles.button} onClick={increment}>
          <svg
            className={Styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 17l5-5-5-5v10z" />
            <path fill="none" d="M0 24V0h24v24H0z" />
          </svg>
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
