import React from 'react';
import styles from './GoogleButton.module.css';

const GoogleButton = () => (
  <button className={styles.Button} type="button">
    <div className={styles.Container}>
      <div className={styles.GoogleImage}></div>
      <span className={styles.GoogleName}>Google</span>
    </div>
  </button>
);

export default GoogleButton;
