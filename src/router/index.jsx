import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import WelcomingPage from '../pages/WelcomingPage/WelcomingPage';
import ExpensesPage from '../pages/ExpensesPage/ExpensesPage';

import MainPage from '../pages/MainPage';
import GoBackButton from '../components/GoBackButton/GoBackButton';

const Router = () => {
  return (
    <Switch>
      <GoBackButton />
      <Route path="/" exact component={MainPage} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/expensespage" component={ExpensesPage} />
    </Switch>
  );
};

export default Router;
