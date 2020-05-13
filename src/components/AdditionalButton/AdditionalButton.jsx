import React from 'react';
import styles from './AdditionalButton.module.css';

const AdditionalButton = ({ nameButton }) => {
  return (
    <div className={styles.containerButton}>
      <button className={styles.additionalButton}>{nameButton}</button>
    </div>
  );
};

export default AdditionalButton;
