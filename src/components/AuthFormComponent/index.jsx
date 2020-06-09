import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './AuthFormComponent.module.css';

const AuthFormComponent = ({ onSubmit, children }) => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  return (
    <form
      onSubmit={onSubmit}
      className={
        Mobile
          ? styles.AuthForm_mobile
          : Tablet
          ? styles.AuthForm_tablet
          : styles.AuthForm_desktop
      }
    >
      {children}
    </form>
  );
};

AuthFormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthFormComponent;
