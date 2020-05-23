import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isDesktop } from '../../services/mediaQuery';
import styles from './Header.module.css';
import Logo from '../logo';
import ProfileName from '../ProfileName';
import LogoutButton from '../LogoutButton';

const index = () => {
  const Desktop = isDesktop(useMediaQuery);
  return (
    <div
      className={Desktop ? styles.Desktop_container : styles.Tablet_container}
    >
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
