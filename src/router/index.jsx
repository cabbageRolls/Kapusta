import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetBalancePage from '../pages/SetBalancePageMobile';
const Router = () => {
  return (
    <Switch>
      {/* <Route path="/main-page" component={MainPge} /> */}
      <SetBalancePage />
    </Switch>
  );
};

export default Router;
