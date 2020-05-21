import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './AuthPage.module.css';

import Header from '../../components/header/index';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  return (
    <>
      <Header />
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
    </>
  );
};

export default AuthPage;
