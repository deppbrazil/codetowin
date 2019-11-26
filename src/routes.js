import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/index';
import Game from './components/game/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}