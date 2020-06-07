import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { isDesktop } from '../../services/mediaQuery';
import styles from './Header.module.css';
import Logo from '../Logo';
import ProfileName from '../ProfileName';
import LogoutButton from '../LogoutButton';

import * as sessionActions from '../../redux/actions/session';

const index = ({ isAuthenticated, onLogOut }) => {
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
          <LogoutButton onLogOut={onLogOut} />
        </div>
      ) : null}
    </div>
  );
};

index.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogOut: PropTypes.func.isRequired,
};

index.defaultProps = {
  isAuthenticated: true,
};

const mapDispatchToProps = {
  onLogOut: sessionActions.logout,
};

export default connect(null, mapDispatchToProps)(index);
