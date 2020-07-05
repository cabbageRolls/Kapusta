import React from 'react';
import { Tablet, Desktop } from '../../services/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import styles from './GoBackButton.module.css';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default function GoBackButton({ props }) {
  const Mobile = isMobile(useMediaQuery);
  const prevLocation = props.location.state;

  return (
    <button type="button" className={styles.GoBackButton}>
      <Link
        to={
          Mobile
            ? routes.SET_BALANCE_PAGE_MOBILE.path
            : prevLocation
            ? prevLocation.from
            : routes.EXPENSES.path
        }
      >
        <div className={styles.GoBackButtonImg} />
      </Link>

      <Link to={prevLocation ? prevLocation.from : routes.EXPENSES.path}>
        <Tablet>На главную</Tablet>
        <Desktop>Вернуться на главную</Desktop>
      </Link>
    </button>
  );
}
