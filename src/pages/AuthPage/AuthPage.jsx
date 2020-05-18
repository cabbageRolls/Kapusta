import React from 'react';
import styles from './AuthPage.module.css';

import Header from '../../components/header/index';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => (
  <>
    <Header />
    <div className={styles.AuthPage}>
      <ProjectTitle />
      <AuthForm />
    </div>
  </>
);

export default AuthPage;
