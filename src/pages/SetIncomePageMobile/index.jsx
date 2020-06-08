import React from 'react';
import styles from './SetIncomePageMobile.module.css';
import ActionButton from '../../components/ActionButton';
import GoBackButton from '../../components/GoBackButton';
import IncomeForm from '../../components/IncomeForm';
import Header from '../../components/Header';

const SetIncomePageMobile = () => (
  <>
    <Header />
    <div className={styles.containerSetIncomePageMobile}>
      <div className={styles.goBackButtonInSetIncomePageMobile}>
        <GoBackButton />
      </div>
      <IncomeForm />
    </div>
    <div className={styles.actionButtonInSetIncomePageMobile}>
      <ActionButton firstButtonText="ввод" secondButtonText="очистить" />
    </div>
  </>
);

export default SetIncomePageMobile;
