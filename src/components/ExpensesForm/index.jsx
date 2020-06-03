import React, { Component } from 'react';
import styles from './ExpensesForm.module.css';

export default class ExpensesForm extends Component {
  state = {
    description: '',
    amount: null,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { description, amount } = this.state;
    const { onSubmit } = this.props;
    onSubmit(description, amount);

    this.setState({
      inputValue: '',
      amount: null,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <form action="" className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.descriptionInputWrapper}>
            <input
              className={styles.descriptionInput}
              type="text"
              name="description"
              value={inputValue}
              onChange={this.handleChange}
              placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
            />
          </div>
          <div className={styles.amountInputWrapper}>
            <input
              className={styles.amountInput}
              type="number"
              name="amount"
              placeholder="0.00"
              onChange={this.handleChange}
            />
            <div className={styles.iconCalculator} />
          </div>
        </form>
      </>
    );
  }
}
