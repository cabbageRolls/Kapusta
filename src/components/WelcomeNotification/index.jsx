import React from 'react';
import styles from './WelcomeNotification.module.css';

const WelcomeNotification = () => {
  return (
    <div className={styles.containerNotification}>
      <div className={styles.notification}>
        <p className={styles.notificationPartOne}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.notificationPartTwo}>
          Ты не можешь тратить деньги пока их у тебя нет:)
        </p>
        <span className={styles.triangle} />
      </div>
    </div>
  );
};

export default WelcomeNotification;
