import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.MARKING} component={CounterPage} />
      <Route path={routes.CASEMAKING} component={CounterPage} />
      <Route path={routes.LEGALIZATION} component={CounterPage} />
    </Switch>
  </App>
);
