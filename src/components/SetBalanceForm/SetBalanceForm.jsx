import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isNotMobile } from '../../services/mediaQuery';
import styles from './SetBalanceForm.module.css';
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
    <div className={isDefault ? styles.default_container : styles.container}>
      <div
        className={
          isDefault
            ? styles.default_balance_container
            : styles.balance_container
        }
      >
        <p className={isDefault ? styles.default_text : styles.text}>Баланс:</p>
        <form
          onSubmit={handleSubmit}
          action="post"
          className={isDefault ? styles.default_form : styles.form}
        >
          <input
            className={[
              isDefault ? styles.default_input : styles.input,
              balance ? styles.existBalance : null,
            ].join(' ')}
            type="number"
            value={inputValue}
            onChange={handleChange}
            placeholder={
              // balance ? `${Number(balance).toFixed(2)} UAH` : '00.00 UAH'
              `${Number(balance).toFixed(2)} UAH`
            }
            pattern="\d+(\.\d{2})?"
            disabled={balance}
          />
          {!balance ? (
            <button
              type="submit"
              className={isDefault ? styles.default_button : styles.button}
              disabled={balance}
            >
              подтвердить
            </button>
          ) : null}
        </form>
      </div>

      {!balance ? (
        <div className={styles.notification_container}>
          <div
            className={
              isDefault ? styles.default_notification : styles.notification
            }
          >
            <Notification />
          </div>
        </div>
      ) : null}
    </div>
  );
};

SetBalanceForm.propTypes = {
  balance: PropTypes.number.isRequired,
  sendBalance: PropTypes.func.isRequired,
};

export default SetBalanceForm;
