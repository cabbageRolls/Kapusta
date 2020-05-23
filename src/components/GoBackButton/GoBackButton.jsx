import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div className={styles.divButton}>
      {' '}
      <button
        type="button"
        className={
          Mobile
            ? styles.GoBackButtonMobile
            : Tablet
            ? styles.GoBackButtonTablet
            : styles.GoBackButton
        }
      >
        {' '}
        <div className={styles.GoBackButtonImg} />{' '}
        {Mobile ? '' : Tablet ? 'На главную' : 'Вернуться на главную'}{' '}
      </button>{' '}
    </div>
  );
}
