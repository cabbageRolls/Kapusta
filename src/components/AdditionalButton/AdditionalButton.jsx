import React from 'react';
import styles from './AdditionalButton.module.css';

const AdditionalButton = () => {
  return (
    <div className={styles.ContainerButton}>
      <button className={styles.RateButton}>РАСХОД</button>
      <button className={styles.IncomeButton}>ДОХОД</button>
    </div>
  );
};

export default AdditionalButton;
