import React from 'react';
import styles from './AdditionalButton.module.css';

const AdditionalButton = ({ active }) => {
  return (
    <div className={styles.ContainerButton}>
      <button
        className={active ? styles.RateButton : styles.disable}
        disabled={!active}
      >
        РАСХОД
      </button>
      <button
        className={active ? styles.IncomeButton : styles.disable}
        disabled={!active}
      >
        ДОХОД
      </button>
    </div>
  );
};

export default AdditionalButton;
