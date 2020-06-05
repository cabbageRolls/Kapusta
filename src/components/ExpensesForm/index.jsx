import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import styles from './ExpensesForm.module.css';
import useInputChange from './useInputChange';
import { isMobile } from '../../services/mediaQuery';
import fetchCategories from '../../redux/operations/categories';
import { getCategories } from '../../redux/selectors';

const ExpensesForm = ({ handleSubmit, onFetchGategories, categories }) => {
  const [input, handleInputChange] = useInputChange();
  const Mobile = isMobile(useMediaQuery);
  useEffect(() => onFetchGategories(), []);
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
          <select
            className={
              !Mobile
                ? styles.descriptionInput_Desktop
                : styles.descriptionInput
            }
            name="description"
            value={input.description}
            onChange={handleInputChange}
            placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
          >
            {categories.map(({ name, _id }) => (
              <option value={_id} key={_id}>
                {name}
              </option>
            ))}
          </select>
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

const mstp = state => ({
  categories: getCategories(state),
});

const mdtp = dispatch => ({
  onFetchGategories: () => dispatch(fetchCategories()),
});

export default connect(mstp, mdtp)(ExpensesForm);
