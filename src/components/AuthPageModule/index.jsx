import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './AuthPageModule.module.css';

import ProjectTitle from '../ProjectTitle';
import AuthForm from '../AuthForm';

const index = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  return (
    <div
      className={
        Mobile
          ? styles.AuthPage_mobile
          : Tablet
          ? styles.AuthPage_tablet
          : styles.AuthPage_desktop
      }
    >
      <ProjectTitle />
      <AuthForm />
    </div>
  );
};

export default index;
