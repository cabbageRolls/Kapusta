import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = () => (
  <div className={styles.FormInputs}>
    <label className={styles.Label}>
      Электронная почта
      <input className={styles.Input} type="email" name="email" placeholder="Your@email.com" />
    </label>
    <label className={styles.Label}>
      Пароль
      <input className={styles.Input} type="password" name="password" placeholder="Пароль" />
    </label>
  </div>
);

export default AuthInput;
