import React from 'react';
import ExpensesForm from '../../components/ExpensesForm';
import GoBackButton from '../../components/GoBackButton';
import styles from './SetExpensesPageMobile.module.css';

const index = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContent}>
        <div className={styles.goBackButton}>
          <GoBackButton />
        </div>
        <ExpensesForm />
      </div>
    </div>
  );
};

export default index;
