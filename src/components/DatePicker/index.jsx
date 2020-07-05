import React from 'react';
import DatePicker from 'react-datepicker';
import Styles from './DatePicker.module.css';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import './stylesDataPicker.css';

const DatePickerCustom = ({ startDate, handleChange }) => (
  <div className={Styles.container}>
    <div className={Styles.iconDate} />
    <DatePicker
      className={Styles.picker}
      selected={startDate}
      onChange={handleChange}
      dateFormat="dd.MM.yyyy"
      name="date"
      fixedHeight
      withPortal
    />
  </div>
);

export default DatePickerCustom;
