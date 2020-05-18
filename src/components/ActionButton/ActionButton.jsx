import React from 'react';
import styles from './ActionButton.module.css';
const ActionButton = ({ firstButtonText, secondButtonText }) => (
  <div className={styles.ActionButton}>
    <button className={styles.FirstButton}>{firstButtonText}</button>
    <button className={styles.SecondButton}>{secondButtonText}</button>
  </div>
);

export default ActionButton;
