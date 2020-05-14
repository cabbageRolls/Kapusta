import React from 'react';
import styles from './ActionButton.module.css';

const ActionButton = ({ upButton, inButton }) => (
  <div className={styles.ActionButton}>
    <button className={styles.SignUpButton}>{upButton}</button>
    <button className={styles.SignInButton}>{inButton}</button>
  </div>
);

export default ActionButton;
