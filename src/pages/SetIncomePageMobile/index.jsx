import React from 'react';
import styles from './SetIncomePageMobile.module.css';
import ActionButton from '../../components/ActionButton';
import GoBackButton from '../../components/GoBackButton';
import IncomeForm from '../../components/IncomeForm';

const SetIncomePageMobile = () => (
  <div className={styles.containerSetIncomePageMobile}>
    <div className={styles.goBackButtonInSetIncomePageMobile}>
      <GoBackButton />
    </div>
    <IncomeForm />
    <div className={styles.actionButtonInSetIncomePageMobile}>
      <ActionButton />
    </div>
  </div>
);

export default SetIncomePageMobile;
