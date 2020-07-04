import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { isDesktop } from '../../services/mediaQuery';
import styles from './Header.module.css';
import Logo from '../Logo';
import ProfileName from '../ProfileName';
import LogoutButton from '../LogoutButton';

import * as sessionOperations from '../../redux/operations/session';
import * as selectors from '../../redux/selectors';

const Header = ({ isAuthenticated, onLogOut }) => {
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

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.storeIsLogin(state),
});

const mapDispatchToProps = {
  onLogOut: sessionOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
