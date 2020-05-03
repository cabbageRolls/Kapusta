import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px) and (min-width: 480px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div className={styles.divButton}>
      {' '}
      <button
        type="button"
        className={
          isMobile
            ? styles.GoBackButtonMobile
            : isTablet
            ? styles.GoBackButtonTablet
            : styles.GoBackButton
        }
      >
        {' '}
        <div className={styles.GoBackButtonImg}></div>{' '}
        {isMobile ? '' : isTablet ? 'Вернуться' : 'Вернуться на главную'}{' '}
      </button>{' '}
    </div>
  );
}
