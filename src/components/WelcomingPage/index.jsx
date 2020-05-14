import React from 'react';
import styles from './WelcomingPage.module.css';

import ProjectTitle from '../ProjectTitle';
import AuthForm from '../AuthForm';

const WelcomingPage = () => (
  <div className={styles.WelcomingPage}>
    <ProjectTitle />
    <AuthForm />
  </div>
);

export default WelcomingPage;
