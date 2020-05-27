import React from 'react';
import { Tablet, Desktop } from '../../services/mediaQuery';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  return (
    <button type="button" className={styles.GoBackButton}>
      <div className={styles.GoBackButtonImg} />
      <Tablet>На главную</Tablet>
      <Desktop>Вернуться на главную</Desktop>
    </button>
  );
}
