import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ExpensesForm.module.css';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';

import fetchProducts from '../../redux/operations/products';
import { postCosts } from '../../redux/operations/costsOperations/costs';
import postIncome from '../../redux/operations/incomeOperations/postIncome';

import { getProducts } from '../../redux/selectors';

import ActionButtons from '../ActionButton';
import DatePicker from '../DatePicker';

import {
  useInputChange,
  useIdChange,
  useDataChange,
  useVisibleChange,
} from './hooks';

const ExpensesForm = ({
  onPostCosts,
  onFetchGategories,
  onPostIncome,
  products,
  isExpensesForm,
}) => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  const [
    input,
    setInput,
    handleInputChange,
    handleClearInput,
  ] = useInputChange();
  const [id, setId] = useIdChange();
  const [isVisible, setIsVisible] = useVisibleChange();
  const [
    pickedDate,
    handlePickedDateChange,
    handleClearPickedDate,
  ] = useDataChange();

  useEffect(() => onFetchGategories(), []);
  useEffect(() => {
    if (input.description) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [input.description]);

  const handleClick = e => {
    if (e.target === e.currentTarget) return;
    setId(e);
    setInput({
      amount: input.amount,
      description: e.target.children[0].textContent,
    });
    setTimeout(setIsVisible, 0, false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsVisible(false);
    if (isExpensesForm) {
      const req = JSON.stringify({
        date: pickedDate,
        product: { productId: id, amount: input.amount, date: pickedDate },
      });
      onPostCosts(req);
    } else {
      const req = JSON.stringify({
        amount: input.amount,
        date: pickedDate,
      });
      onPostIncome(req);
    }
    handleClearInput();
    handleClearPickedDate();
  };

  return (
    <form
      action="post"
      className={
        Mobile ? styles.form : Tablet ? styles.form_Tablet : styles.form_Desktop
      }
      onSubmit={handleSubmit}
    >
      <div
        className={
          Mobile
            ? styles.DatePickerMobile
            : Tablet
            ? styles.DatePickerTablet
            : styles.DatePickerDesktop
        }
      >
        <DatePicker
          handleChange={handlePickedDateChange}
          startDate={pickedDate}
        />
      </div>
      <div
        className={
          Mobile
            ? null
            : Tablet
            ? styles.inputWrapperTablet
            : styles.inputWrapper
        }
      >
        <div className={styles.descriptionInputWrapper}>
          <input
            autoComplete="off"
            className={
              !Mobile
                ? styles.descriptionInput_Desktop
                : styles.descriptionInput
            }
            name="description"
            value={isExpensesForm ? input.description : ''}
            onChange={handleInputChange}
            placeholder={
              isExpensesForm ? 'Введите свой расход' : 'Введите сумму дохода'
            }
            disabled={!isExpensesForm}
            required
          />
          {isVisible ? (
            <ul
              role="button"
              className={
                !Mobile
                  ? styles.expensesDataList
                  : styles.Mobile_expensesDataList
              }
              onClick={handleClick}
            >
              {products.map(({ name, _id, category }) => {
                if (
                  name.toLowerCase().includes(input.description.toLowerCase())
                ) {
                  return (
                    <li
                      key={_id}
                      id={_id}
                      className={
                        Mobile
                          ? styles.expensesOptionMobile
                          : styles.expensesOption
                      }
                    >
                      <span className={styles.productName}>{name}</span>
                      <span
                        className={
                          Mobile
                            ? styles.categoryNameMobile
                            : styles.categoryName
                        }
                      >
                        {category.name}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          ) : null}
        </div>
        <div
          className={
            !Mobile
              ? styles.amountInputWrapper_Desktop
              : styles.amountInputWrapper
          }
        >
          <input
            className={
              !Mobile ? styles.amountInput_Desktop : styles.amountInput
            }
            type="number"
            name="amount"
            value={input.amount}
            placeholder="0.00"
            onChange={handleInputChange}
            required
          />
          <div className={styles.iconCalculator} />
        </div>
      </div>
      <div
        className={
          Mobile ? styles.buttons : Tablet ? styles.buttonsTablet : null
        }
      >
        <ActionButtons
          onSignup={handleClearInput}
          firstButtonText="ввод"
          secondButtonText="очистить"
        />
      </div>
    </form>
  );
};

ExpensesForm.propTypes = {
  isExpensesForm: PropTypes.bool,
};

ExpensesForm.defaultProps = {
  isExpensesForm: true,
};

const mstp = state => ({
  products: getProducts(state),
});

const mdtp = dispatch => ({
  onFetchGategories: () => dispatch(fetchProducts()),
  onPostCosts: req => dispatch(postCosts(req)),
  onPostIncome: req => dispatch(postIncome(req)),
});

export default connect(mstp, mdtp)(ExpensesForm);
