import React from 'react';
import { Tablet, Desktop } from '../../services/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import styles from './GoBackButton.module.css';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default function GoBackButton() {
  const Mobile = isMobile(useMediaQuery);

  return (
    <button type="button" className={styles.GoBackButton}>
      <Link
        to={Mobile ? routes.SET_BALANCE_PAGE_MOBILE.path : routes.EXPENSES.path}
      >
        <div className={styles.GoBackButtonImg} />
      </Link>

      <Link to={routes.EXPENSES.path}>
        <Tablet>На главную</Tablet>
        <Desktop>Вернуться на главную</Desktop>
      </Link>
    </button>
  );
}
