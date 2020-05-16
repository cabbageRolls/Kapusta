import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPge from '../pages/MainPage/'

const Router = () => {
  return (
    <Switch>
      <Route path="/main-page" component={MainPge}/>
    </Switch>
  );
};

export default Router;
