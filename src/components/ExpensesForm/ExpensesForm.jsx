import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './ExpensesForm.module.css';

export default function ExpensesForm() {
  return (
    <form>
      <input
        type="text"
        name="description"
        placeholder="Здесь ты будешь вносить на что ты тратишь деньги"

        // value={name}
        // onChange={this.handleChange}
      />

      <input
        type="text"
        name="amount"
        placeholder="0.00"
        // value={amount}
        // onChange={this.handleChange}
      />
    </form>
  );
}
