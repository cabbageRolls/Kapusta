import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import WelcomingPage from '../pages/WelcomingPage/WelcomingPage';
import ExpensesPage from '../pages/ExpensesPage/ExpensesPage';

import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/expensespage" component={ExpensesPage} />
    </Switch>
  );
};

export default Router;
