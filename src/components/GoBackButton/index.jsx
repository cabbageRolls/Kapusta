import React from 'react';
import { Tablet, Desktop } from '../../services/mediaQuery';
import styles from './GoBackButton.module.css';
import { Link } from 'react-router-dom';
import routes from '../../routes'

export default function GoBackButton() {
  return (
    <button type="button" className={styles.GoBackButton}>
      <div className={styles.GoBackButtonImg} />
      <Tablet>На главную</Tablet>
      <Desktop>
        <Link to={routes.EXPENSES.path}> Вернуться на главную</Link>
      </Desktop>
    </button>
  );
}
