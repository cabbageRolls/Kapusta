import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Default, isNotMobile } from '../../services/mediaQuery';
import { connect } from 'react-redux';
import {
  handeleIncrement,
  handeleDecrement,
} from '../../redux/actions/monthPicker';
import { monthPicker, yearPicker } from '../../redux/selectors';

import Styles from './MonthPicker.module.css';
import Icon from './Icon';
import 'moment/locale/ru';
import moment from 'moment';
moment.locale('ru');

const index = ({ month, year, increment, decrement }) => {
  // console.log(+moment(new Date()).format('M'));
  // console.log(+moment(new Date()).format('YYYY'));

  const date = moment(new Date());

  date.month(month);
  date.year(year);

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
          {date.format('MMM')} {date.format('YYYY')}
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

const MDTP = {
  increment: handeleIncrement,
  decrement: handeleDecrement,
};
const MSTP = state => ({
  month: monthPicker(state),
  year: yearPicker(state),
});

export default connect(MSTP, MDTP)(index);
