import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isNotMobile } from '../../services/mediaQuery';
import Styles from './SetBalanceForm.module.css';
import DatePickerCustom from '../DatePicker';
import Notification from '../WelcomeNotification';

const SetBalanceForm = ({ balance, error, sendBalance }) => {
  const [inputValue, setInputValue] = useState(balance);
  useEffect(() => {
    setInputValue(balance);
  }, [balance]);
  const isDefault = isNotMobile(useMediaQuery);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendBalance(+inputValue);

    if (error && error.message) {
      setInputValue(balance);
    }
  };

  return (
    <div className={isDefault ? Styles.default_container : Styles.container}>
      <div
        className={
          isDefault
            ? Styles.default_balance_container
            : Styles.balance_container
        }
      >
        <p className={isDefault ? Styles.default_text : Styles.text}>Баланс:</p>
        <form
          onSubmit={handleSubmit}
          action=""
          className={isDefault ? Styles.default_form : Styles.form}
        >
          <input
            className={isDefault ? Styles.default_input : Styles.input}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={
              balance ? `${Number(balance).toFixed(2)} UAH` : '00.00 UAH'
            }
            pattern="\d+(\.\d{2})?"
          />
          <button
            type="submit"
            className={isDefault ? Styles.default_button : Styles.button}
          >
            <div className={Styles.containerBtn}>подтвердить</div>
          </button>
        </form>
      </div>

      {balance ? (
        <div className={Styles.datePicker}>
          <DatePickerCustom />
        </div>
      ) : (
        <div
          className={
            isDefault ? Styles.default_notification : Styles.notification
          }
        >
          <Notification />
        </div>
      )}
    </div>
  );
};
SetBalanceForm.propTypes = {
  balance: PropTypes.number.isRequired,
  error: PropTypes.shape(PropTypes.any).isRequired,
  sendBalance: PropTypes.func.isRequired,
};

export default SetBalanceForm;
