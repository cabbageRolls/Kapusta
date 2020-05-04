/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Styles from './MonthPicker.module.css';

const index = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div className={Styles.container}>
      {isMobile ? '' : <h4 className={Styles.title}>Текущий период:</h4>}
      <div>
        <button className={Styles.button}>
          <img
            className={Styles.svg}
            src="./images/svg/arrow_right-24px.svg"
            alt="arrowLeft"
          />
        </button>
        <span className={Styles.data}>Ноябрь 2019</span>
        <button className={Styles.button}>
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
export default index;
