import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div></div>} />
    </Switch>
  );
};

export default Router;
