import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ExpensesForm.module.css';
import useInputChange from './useInputChange';
import useIdChange from './useIdChange';
import { isMobile, isTablet } from '../../services/mediaQuery';
import fetchProducts from '../../redux/operations/products';
import postCosts from '../../redux/operations/postCosts';
import { getProducts } from '../../redux/selectors';
import ActionButtons from '../ActionButton';

const ExpensesForm = ({
  onPostCosts,
  onFetchGategories,
  products,
  isExpensesForm,
}) => {
  const [
    input,
    setInput,
    handleInputChange,
    handleClearInput,
  ] = useInputChange();
  const [id, setId] = useIdChange();
  const [isVisible, setIsVisible] = useState(false);
  const Tablet = isTablet(useMediaQuery);
  const Mobile = isMobile(useMediaQuery);
  useEffect(() => onFetchGategories(), []);
  useEffect(() => {
    if (input.description) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [input]);

  const handleClick = e => {
    if (e.target === e.currenttarget) return;
    setId(e);
    setInput({
      amount: input.amount,
      description: e.target.children[0].textContent,
    });
  };

  const handleSubmit = e => {
    console.log('invoked');
    e.preventDefault();
    setIsVisible(false);
    const today = new Date().toISOString().substring(0, 10);

    const req = JSON.stringify({
      date: today,
      product: { productId: id, amount: input.amount, date: today },
    });

    onPostCosts(req);
  };

  return (
    <form
      action="post"
      className={!Mobile ? styles.form_Desktop : styles.form}
      onSubmit={handleSubmit}
    >
      <div className={!Mobile ? styles.inputWrapper : null}>
        <div className={styles.descriptionInputWrapper}>
          <input
            autoComplete="off"
            className={
              !Mobile
                ? styles.descriptionInput_Desktop
                : styles.descriptionInput
            }
            name="description"
            value={input.description}
            onChange={handleInputChange}
            placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
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
                  name.toLowerCase().includes(input.description) ||
                  category.name.toLowerCase().includes(input.description)
                ) {
                  return (
                    <li key={_id} id={_id} className={styles.expensesOption}>
                      <span className={styles.productName}>{name}</span>
                      <span className={styles.categoryName}>
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
      <div className={Mobile ? styles.buttons : null}>
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
});

export default connect(mstp, mdtp)(ExpensesForm);
