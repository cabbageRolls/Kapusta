import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './MainPage.module.css';
import { isNotMobile, Default } from '../../services/mediaQuery';
import SetBalanceForm from '../../components/SetBalanceForm';
import GoToReportsButton from '../../components/GoToReportsButton';
import AdditionalButton from '../../components/AdditionalButton';
import Header from '../../components/Header';
import ExpensesComponent from '../../components/ExpensesComponents';

const MainPage = () => {
  const isDefault = isNotMobile(useMediaQuery);
  return (
    <Default>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.mainWrapperBg}></div>
        <div
          className={
            isDefault
              ? styles.MainPageContainerDekstop
              : styles.MainPageContainerTablet
          }
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '10px',
              paddingTop: '40px',
            }}
          >
            <SetBalanceForm />
            <GoToReportsButton />
          </div>
          <AdditionalButton />
          <ExpensesComponent />
        </div>
        <div className={styles.cabbageBack}></div>
      </div>
    </Default>
  );
};

export default MainPage;
