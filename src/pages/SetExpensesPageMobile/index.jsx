import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
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
        <Switch>
          <Route path={routes.SET_EXPENSES_PAGE_MOBILE.path}>
            <ExpensesForm />
          </Route>
          <Route path={routes.SET_INCOME_PAGE_MOBILE.path}>
            <ExpensesForm isExpensesForm={false} />
          </Route>
        </Switch>
        {/* <ExpensesForm /> */}
      </div>
    </div>
  );
};

export default index;
