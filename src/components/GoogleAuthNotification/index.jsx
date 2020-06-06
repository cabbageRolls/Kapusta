import React from 'react';
import styles from './GoogleAuthNotification.module.css';

const GoogleAuthNotification = () => (
  <div className={styles.Container}>
    <p className={styles.Text}>
      К сожалению, авторизация через Google сейчас недоступна.
    </p>
  </div>
);

export default GoogleAuthNotification;
