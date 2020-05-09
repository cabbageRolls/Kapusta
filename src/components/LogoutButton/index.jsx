import React from 'react';
import styles from './LogoutButton.module.css';
import MediaQuery from 'react-responsive';
import svg from './images/logout.svg';

const index = () => {
  return (
    <button className={styles.button}>
      <MediaQuery minDeviceWidth={768}>
        <span className={styles.text}>Выйти</span>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <svg className={styles.icon}>
          <use href={svg + '#Capa_1'} />
        </svg>
      </MediaQuery>
    </button>
  );
};

export default index;
