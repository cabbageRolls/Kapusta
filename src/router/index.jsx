import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPge from '../pages/MainPage/';
import IncomePage from '../pages/IncomePage';

const Router = () => {
  return (
    <Switch>
      <Route path="/main-page" component={MainPge} />
      <Route path="/income-page" exact component={IncomePage} />
    </Switch>
  );
};

export default Router;
