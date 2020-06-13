import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './MainPage.module.css';
import { isNotMobile, Default } from '../../services/mediaQuery';
import routes from '../../routes';

import SetBalanceForm from '../../components/SetBalanceForm';
import GoToReportsButton from '../../components/GoToReportsButton';
import AdditionalButton from '../../components/AdditionalButton';
import Header from '../../components/Header';

const MainPage = () => {
  const isDefault = isNotMobile(useMediaQuery);
  return (
    
    <Default>
      <Header/>
      <div
        className={
          isDefault
            ? styles.MainPageContainerDekstop
            : styles.MainPageContainerTablet
        }
      >
        <div
          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '30px' }}
        >
          <SetBalanceForm />
          <GoToReportsButton />
        </div>
        <AdditionalButton />
        <Switch>
          <Route
            path={routes.EXPENSES.path}
            component={routes.EXPENSES.component}
          />
          <Route path={routes.INCOME.path} component={routes.INCOME.component} />
        </Switch>
      </div>
    </Default>
  );
};

export default MainPage;
