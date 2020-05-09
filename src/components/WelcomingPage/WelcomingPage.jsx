import React from 'react';
import styles from './WelcomingPage.module.css';

import ProjectTitle from '../ProjectTitle/ProjectTitle';
import AuthForm from '../AuthForm/AuthForm';

const WelcomingPage = () => (
  <div className={styles.WelcomingPage}>
    <ProjectTitle />
    <AuthForm />
  </div>
);

export default WelcomingPage;
