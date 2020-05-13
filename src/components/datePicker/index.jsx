// import React from 'react';
import Styles from './datePicker.module.css';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DatePickerCustom extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.iconDate}></div>
        <DatePicker
          className={Styles.picker}
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd.MM.yyyy"
          withPortal
        />
      </div>
    );
  }
}
