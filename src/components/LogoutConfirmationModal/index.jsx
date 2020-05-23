import React from 'react';
import styles from './LogoutConfirmationModal.module.css';

const LogoutConfirmationModal = () => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modalBox}>
        <span className={styles.info}>Вы уверенны?</span>
        <button
          type="button"
          className={[styles.button, styles.confirmBtn].join(' ')}
        >
          да
        </button>
        <button
          type="button"
          className={[styles.button, styles.refuteBtn].join(' ')}
        >
          нет
        </button>
      </div>
    </>
  );
};

export default LogoutConfirmationModal;
