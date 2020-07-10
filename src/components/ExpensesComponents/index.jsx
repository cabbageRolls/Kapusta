import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ExpensesForm from '../ExpensesForm';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import MonthSummary from '../MonthSummary';
import Styles from './index.module.css';
import * as MQ from '../../services/mediaQuery';

const ExpensesComponents = () => {
  const IsTablet = MQ.isTablet(useMediaQuery);

  return (
    <>
      <section className={IsTablet ? Styles.section : Styles.D_section}>
        <div className={Styles.head}>
          <div
            className={
              IsTablet ? Styles.ExpensesSection : Styles.D_ExpensesSection
            }
          >
            <div
              className={IsTablet ? Styles.ExpensesForm : Styles.D_ExpensesForm}
            >
              <Switch>
                <Route path={routes.EXPENSES.path}>
                  <ExpensesForm />
                </Route>
                <Route path={routes.INCOME.path}>
                  <ExpensesForm isExpensesForm={false} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <div className={IsTablet ? Styles.main : Styles.D_main}>
          <div
            className={IsTablet ? Styles.ExpensesList : Styles.D_ExpensesList}
          >
            <Switch>
              <Route
                path={routes.EXPENSES.path}
                component={routes.EXPENSES.component}
              />
              <Route
                path={routes.INCOME.path}
                component={routes.INCOME.component}
              />
            </Switch>
          </div>
          <div
            className={IsTablet ? Styles.MonthSummary : Styles.D_MonthSummary}
          >
            <MonthSummary />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpensesComponents;
