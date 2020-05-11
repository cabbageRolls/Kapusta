import React from 'react';
import SetIncomePageMobile from '../pages/SetIncomePageMobile/SetIncomePageMobile';
import { Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={() => (
          <div>
            <SetIncomePageMobile />
          </div>
        )}
      />
    </Switch>
  );
};

export default Router;
