import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { isDesktop } from '../../services/mediaQuery';
import styles from './Header.module.css';
import Logo from '../Logo';
import ProfileName from '../ProfileName';
import LogoutButton from '../LogoutButton';

const index = ({ isAuthenticated }) => {
  const Desktop = isDesktop(useMediaQuery);
  return (
    <div
      className={Desktop ? styles.Desktop_container : styles.Tablet_container}
    >
      <div className={styles.logo}>
        <Logo />
      </div>
      {isAuthenticated ? (
        <div className={styles.rightBar}>
          <ProfileName />
          <LogoutButton />
        </div>
      ) : null}
    </div>
  );
};

index.propTypes = {
  isAuthenticated: PropTypes.bool,
};

index.defaultProps = {
  isAuthenticated: true,
};

export default index;
