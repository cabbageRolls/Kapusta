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
      {isMobile ? (
        <button type="button" className={styles.GoBackButtonMobile}>
          <div className={styles.GoBackButtonImg}></div>
        </button>
      ) : isTablet ? (
        <button type="button" className={styles.GoBackButtonTablet}>
          <div className={styles.GoBackButtonImg}></div>
          На главную
        </button>
      ) : (
        <button type="button" className={styles.GoBackButton}>
          <div className={styles.GoBackButtonImg}></div>
          Вернуться на главную
        </button>
      )}
    </div>
  );
}
