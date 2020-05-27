import React, { Component } from 'react';
import styles from './IncomeForm.module.css';

export default class IncomeForm extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { onSubmit } = this.props;
    onSubmit(inputValue);

    this.setState({
      inputValue: '',
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <>
        <form action="" className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.div}>
            <input
              className={styles.descriptionInput}
              type="text"
              name="description"
              value={inputValue}
              onChange={this.handleChange}
            />
            {inputValue.length === 0 && (
              <span className={styles.placeholder}>
                Поздравляю! Сколько ты заработал?
              </span>
            )}
          </div>
          <input
            className={styles.amountInput}
            type="text"
            name="amount"
            placeholder="0.00"
          />
          <div className={styles.border}></div>
          <div className={styles.iconCalculator}></div>
        </form>
      </>
    );
  }
}
