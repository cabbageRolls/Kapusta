import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Styles from './DatePicker.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import currentDate from '../../redux/operations/currentDate';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import './stylesDataPicker.css';

const DatePickerCustom = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = date => {
    setStartDate(date);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.iconDate} />
      <DatePicker
        className={Styles.picker}
        selected={startDate}
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
        fixedHeight
        withPortal
      />
    </div>
  );
};
DatePickerCustom.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
};
const MSTP = store => ({
  startDate: selectors.getCurrentDate(store),
});

export default connect(MSTP, { setStartDate: currentDate })(DatePickerCustom);
