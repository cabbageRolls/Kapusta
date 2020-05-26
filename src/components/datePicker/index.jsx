import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Styles from './datePicker.module.css';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import './stylesDataPicker.css';
// import './node_modules/react-datepicker/dist/react-datepicker-cssmodules.css';

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

export default DatePickerCustom;
