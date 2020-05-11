import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomingPage from '../pages/WelcomingPage/WelcomingPage';
import ExpensesPage from '../pages/ExpensesPage/ExpensesPage';

import MainPge from '../pages/MainPage/';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={WelcomingPage} />
      <Route path="/expensespage" component={ExpensesPage} />
    </Switch>
  );
};

export default Router;
