import React from 'react';
import { Mobile, Default } from '../../services/mediaQuery';
import styles from './LogoutButton.module.css';
import svg from './images/logout.svg';

const index = () => {
  return (
    <button type="button" className={styles.button}>
      <Mobile>
        <svg className={styles.icon}>
          <use href={`${svg}#Capa_1`} />
        </svg>
      </Mobile>
      <Default>
        <span className={styles.text}>Выйти</span>
      </Default>
    </button>
  );
};

export default index;
