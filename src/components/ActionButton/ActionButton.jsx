import React from 'react';
import styles from './ActionButton.module.css';

const ActionButton = () => (
  <div className={styles.ActionButton}>
    <button className={styles.SignUpButton}>Войти</button>
    <button className={styles.SignInButton}>Регистрация</button>
  </div>
);

export default ActionButton;
