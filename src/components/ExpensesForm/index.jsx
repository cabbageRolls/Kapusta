import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './ExpensesForm.module.css';
import useInputChange from './useInputChange';
import { isMobile } from '../../services/mediaQuery';

const ExpensesForm = ({ handleSubmit }) => {
  const [input, handleInputChange] = useInputChange();
  const Mobile = isMobile(useMediaQuery);
  return (
    <>
      <form
        action=""
        className={
          !Mobile
            ? styles.form_Desktop
            : !Mobile
            ? styles.form_Desktop
            : styles.form
        }
        onSubmit={handleSubmit}
      >
        <div className={styles.descriptionInputWrapper}>
          <input
            className={
              !Mobile
                ? styles.descriptionInput_Desktop
                : styles.descriptionInput
            }
            type="text"
            name="description"
            value={input.description}
            onChange={handleInputChange}
            placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
          />
        </div>
        <div className={styles.amountInputWrapper}>
          <input
            className={
              !Mobile ? styles.amountInput_Desktop : styles.amountInput
            }
            type="number"
            name="amount"
            value={input.amount}
            placeholder="0.00"
            onChange={handleInputChange}
          />
          <div className={styles.iconCalculator} />
        </div>
      </form>
    </>
  );
};
export default ExpensesForm;
//  handleChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// };

// handleSubmit = e => {
//   e.preventDefault();
//   const { description, amount } = this.state;
//   const { onSubmit } = this.props;
//   onSubmit(description, amount);

//   this.setState({
//     inputValue: '',
//     amount: null,
//   });
// };
