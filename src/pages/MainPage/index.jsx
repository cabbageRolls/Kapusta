import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './MainPage.module.css';
import {
  isMobile,
  isNotMobile,
  // isTablet,
  // isDesktop,
} from '../../services/mediaQuery';

import SetBalanceForm from '../../components/SetBalanceForm';
import GoToReportsButton from '../../components/GoToReportsButton';
import AdditionalButton from '../../components/AdditionalButton';

const MainPage = () => {
  const Mobile = isMobile(useMediaQuery);
  // const Tablet = isTablet(useMediaQuery);
  // const Desktop = isDesktop(useMediaQuery);
  const Default = isNotMobile(useMediaQuery);
  return (
    !Mobile && <div
      className={
        Default
          ? styles.MainPageContainerDekstop
          : styles.MainPageContainerTablet
      }
    >
      <div style={{ display: 'flex', flexWrap:"wrap", marginBottom: '30px' }}>
        <SetBalanceForm />
        <GoToReportsButton />
      </div>
      <AdditionalButton />
    </div>
  );
};

export default MainPage;
