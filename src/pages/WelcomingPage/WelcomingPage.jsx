import React from 'react';
import styles from './WelcomingPage.module.css';

import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';
import AuthForm from '../../components/AuthForm/AuthForm';

const WelcomingPage = () => (
  <div className={styles.WelcomingPage}>
    <ProjectTitle />
    <AuthForm />
  </div>
);

export default WelcomingPage;
