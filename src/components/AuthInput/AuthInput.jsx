import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = () => (
  <div className={styles.FormInputs}>
    <label className={styles.Label} htmlFor="email">
      Электронная почта
      <input
        className={styles.Input}
        type="email"
        name="email"
        id="email"
        placeholder="Your@email.com"
      />
    </label>
    <label className={styles.Label} htmlFor="password">
      Пароль
      <input
        className={styles.Input}
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
      />
    </label>
  </div>
);

export default AuthInput;
