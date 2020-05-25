import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Default, isNotMobile } from '../../services/mediaQuery';
import Styles from './MonthPicker.module.css';
import Icon from './Icon';

const index = ({ month = 'сентябрь', year = '2020', increment, decrement }) => {
  const IsDefault = isNotMobile(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_container : Styles.container}>
      <Default>
        <h4 className={Styles.title}>Текущий период:</h4>
      </Default>
      <div className={Styles.wrapper}>
        <button type="button" className={Styles.button} onClick={decrement}>
          <Icon className={Styles.svgLeft} />
        </button>
        <div className={Styles.data}>
          {month} {year}
        </div>
        <button type="button" className={Styles.button} onClick={increment}>
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
