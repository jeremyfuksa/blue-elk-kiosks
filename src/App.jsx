import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './routes/menu/Menu';
import RollContainer from './routes/roll/RollContainer';
import SlidesContainer from './routes/slides/SlidesContainer';
const history = createMemoryHistory();
const App = () => (
  <Router history={history}>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/tribal-guardians/' component={RollContainer} />
        <Route path='/test-slides/' component={SlidesContainer} />
      </Switch>
  </Router>
);

export default App;
