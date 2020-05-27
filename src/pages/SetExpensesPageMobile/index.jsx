import React from 'react';
import ExpensesForm from '../../components/ExpensesForm';
import GoBackButton from '../../components/GoBackButton';
import ActionButton from '../../components/ActionButton';
import styles from './SetExpensesPageMobile.module.css';

const index = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.goBackButton}>
        <GoBackButton />
      </div>
      <ExpensesForm />
      <div className={styles.buttons}>
        <ActionButton firstButtonText="ввод" secondButtonText="очистить" />
      </div>
    </div>
  );
};

export default index;
