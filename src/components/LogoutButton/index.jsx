import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import styles from './LogoutButton.module.css';
import svg from './images/logout.svg';

const index = () => {
  const Mobile = isMobile(useMediaQuery);
  return (
    <button type="button" className={styles.button}>
      {Mobile ? (
        <svg className={styles.icon}>
          <use href={`${svg}#Capa_1`} />
        </svg>
      ) : (
        <span className={styles.text}>Выйти</span>
      )}
    </button>
  );
};

export default index;
