import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ExpensesForm.module.css';
import useInputChange from './useInputChange';
import useIdChange from './useIdChange';
import { isMobile, isTablet } from '../../services/mediaQuery';
import fetchCategories from '../../redux/operations/categories';
import postCosts from '../../redux/operations/postCosts';
import { getCategories } from '../../redux/selectors';
import ActionButtons from '../ActionButton';

const ExpensesForm = ({
  onPostCosts,
  onFetchGategories,
  products,
  isExpensesForm,
}) => {
  const [input, handleInputChange, handleClearInput] = useInputChange();
  const [id, setId] = useIdChange();
  const Tablet = isTablet(useMediaQuery);
  const Mobile = isMobile(useMediaQuery);
  useEffect(() => onFetchGategories(), []);

  const handleClick = e => {
    if (e.target === e.currenttarget) return;
    setId(e);

    input.description = e.target.textContent;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const today = new Date().toISOString().substring(0, 10);

    const req = JSON.stringify({
      date: today,
      product: { productId: id, amount: input.amount, date: today },
    });

    onPostCosts(req);
  };

  return (
    <>
      <form
        action="post"
        className={!Mobile ? styles.form_Desktop : styles.form}
        onSubmit={onPostCosts}
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
            value={input.description}
            onChange={handleInputChange}
            placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
            list="expenses"
            disabled={!isExpensesForm}
          />
          {input.description ? (
            <ul
              role="button"
              className={styles.expensesDataList}
              onClick={handleClick}
            >
              {products.map(({ name, _id, category }) => (
                <li key={_id} id={_id} className={styles.expensesOption}>
                  <span className={styles.productName}>{name}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                </li>
              ))}
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
          />
          <div className={styles.iconCalculator} />
        </div>
        <div
          className={Tablet ? styles.actionButton : styles.desktop_actionButton}
        />

        <ActionButtons
          submitFn={handleSubmit}
          onSignup={handleClearInput}
          firstButtonText="ввод"
          secondButtonText="очистить"
        />
      </form>
    </>
  );
};

ExpensesForm.propTypes = {
  isExpensesForm: PropTypes.bool,
};

ExpensesForm.defaultProps = {
  isExpensesForm: true,
};

const mstp = state => ({
  products: getCategories(state),
});

const mdtp = dispatch => ({
  onFetchGategories: () => dispatch(fetchCategories()),
  onPostCosts: req => dispatch(postCosts(req)),
});

export default connect(mstp, mdtp)(ExpensesForm);
