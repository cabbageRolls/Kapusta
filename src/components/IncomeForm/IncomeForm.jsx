import React, { Component } from 'react';
import styles from './IncomeForm.module.css';

export default class IncomeForm extends Component {
  state = {
    inputDescription: '',
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputDescription: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputDescription } = this.state;
    const { onSubmit } = this.props;
    onSubmit(inputDescription);

    this.setState({
      inputDescription: '',
    });
  };
  render() {
    const { inputDescription } = this.state;
    return (
      <>
        <div className={styles.container}>
          <form action="" className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.div}>
              <input
                className={styles.descriptionInput}
                type="text"
                name="description"
                value={inputDescription}
                onChange={this.handleChange}
              />
              {inputDescription.length === 0 && (
                <span className={styles.placeholder}>
                  Поздравляю! Сколько ты заработал?
                </span>
              )}
            </div>
            <input
              className={styles.amountInput}
              type="text"
              name="amount"
              // value={inputValue}
              placeholder="0.00"
              maxLength="8"
            />
            <div className={styles.border}></div>
            <div className={styles.iconCalculator}></div>
          </form>
        </div>
      </>
    );
  }
}
