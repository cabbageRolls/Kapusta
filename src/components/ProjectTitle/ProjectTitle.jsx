import React from 'react';
import styles from './ProjectTitle.module.css';

const ProjectTitle = () => (
  <div className={styles.ProjectTitle}>
    <h1 className={styles.Kapusta}>
      Kapu<span className={styles.KapustaSign}>s</span>ta
    </h1>
    <p className={styles.SmartFinance}>smart finance</p>
  </div>
);

export default ProjectTitle;
