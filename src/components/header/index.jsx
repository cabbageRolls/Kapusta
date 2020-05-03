import React from 'react';
import styles from './Header.module.css';
import Logo from '../logo/';
import ProfileName from '../ProfileName/';
import LogoutButton from '../LogoutButton/';

const index = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.rightBar}>
        <ProfileName />
        <LogoutButton />
      </div>
    </div>
  );
};

export default index;
