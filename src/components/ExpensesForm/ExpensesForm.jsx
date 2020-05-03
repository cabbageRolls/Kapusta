import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './ExpensesForm.module.css';

export default function ExpensesForm() {
  return (
    <>
      <form action="" className={styles.form}>
        <input
          className={styles.descriptionInput}
          type="text"
          name="description"
          placeholder="Здесь ты будешь вносить на что ты тратишь деньги"
          // value={name}
          // onChange={this.handleChange}
        />

        <input
          className={styles.amountInput}
          type="text"
          name="amount"
          placeholder="0.00"
          // value={0.0}
          // onChange={this.handleChange}
        />
        <div className={styles.iconCalculator}></div>
      </form>
    </>
  );
}
