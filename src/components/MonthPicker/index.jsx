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
  const date = moment(new Date());

  date.month(month - 1);
  date.year(year);

  const IsDefault = isNotMobile(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_container : Styles.container}>
      <Default>
        <h4 className={Styles.title}>Текущий период:</h4>
      </Default>
      <div className={Styles.wrapper}>
        <button
          type="button"
          className={Styles.button}
          onClick={() => decrement(month)}
        >
          <Icon className={Styles.svgLeft} />
        </button>

        <div className={Styles.data}>
          {date.format('MMM')} {date.format('YYYY')}
        </div>
        <button
          type="button"
          className={Styles.button}
          onClick={() => increment(month)}
        >
          <Icon className={Styles.svg} />
        </button>
      </div>
    </div>
  );
};
index.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const MDTP = {
  increment: month => handeleIncrement(month),
  decrement: month => handeleDecrement(month),
};
const MSTP = state => ({
  month: monthPicker(state),
  year: yearPicker(state),
});

export default connect(MSTP, MDTP)(index);
