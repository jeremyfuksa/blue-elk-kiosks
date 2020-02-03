import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
  </Switch>
);

export default App;
