import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomingPage from '../pages/WelcomingPage/WelcomingPage';
import ExpensesPage from '../pages/ExpensesPage/ExpensesPage';

const Router = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => (
          <div>
            <WelcomingPage />
          </div>
        )}
      />
      <Route path="/expensespage" component={ExpensesPage} />
    </Switch>
  );
};

export default Router;
