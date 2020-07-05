import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import ExpensesPage from '../pages/ExpensesPage';
import MainPage from '../pages/MainPage';
import GoBackButton from '../components/GoBackButton';
import ReportPage from '../pages/ReportPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={GoBackButton} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/report" component={ReportPage} />
      <Route path="/expensespage" component={ExpensesPage} />
    </Switch>
  );
};

export default Router;
