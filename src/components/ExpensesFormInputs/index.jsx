import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';

import styles from './ExpensesFormInputs.module.css';

const ExpensesFormInputs = ({
  descriptionValue,
  amountValue,
  onDescriptionChange,
  onAmountChange,
}) => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  return (
    <>
      <label htmlFor="description">
        <input
          className={
            Mobile
              ? styles.TextInput_mobile
              : Tablet
              ? styles.TextInput_tablet
              : styles.TextInput_desktop
          }
          id="description"
          type="text"
          name="description"
          value={descriptionValue}
          onChange={onDescriptionChange}
          placeholder={
            Mobile
              ? 'Внеси то, на что ты тратишь деньги'
              : 'Здесь ты будешь вносить то, на что ты тратишь деньги'
          }
        />
      </label>
      <label
        className={
          Mobile
            ? styles.AmountLabel_mobile
            : Tablet
            ? styles.AmountLabel_tablet
            : styles.AmountLabel_desktop
        }
        htmlFor="amount"
      >
        <input
          className={
            Mobile
              ? styles.AmountInput_mobile
              : Tablet
              ? styles.AmountInput_tablet
              : styles.AmountInput_desktop
          }
          id="amount"
          type="text"
          name="amount"
          value={amountValue}
          placeholder="0.00"
          onChange={onAmountChange}
        />
        <div
          className={
            Mobile
              ? styles.IconFrame_mobile
              : Tablet
              ? styles.IconFrame_tablet
              : styles.IconFrame_tablet
          }
        >
          <div className={styles.IconCalculator} />
        </div>
      </label>
    </>
  );
};

ExpensesFormInputs.propTypes = {
  descriptionValue: PropTypes.string.isRequired,
  amountValue: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};

export default ExpensesFormInputs;
