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
        <Route
          path='/tribal-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Blue Elk Tribal Guardian Roll'
              background='red-background'
              jsonUrl='../../data/tribalGuardians.json'
            />
          )}
        />
        <Route
          path='/lifetime-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Lifetime Tribal Guardian Roll'
              background='yellow-background'
              jsonUrl='../../data/tribalGuardians.json'
            />
          )}
        />
        <Route
          path='/elevations/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Session Elevations'
              background='blue-background'
              jsonUrl='../../data/tribalGuardians.json'
            />
          )}
        />
        <Route path='/photo-slide-show/' component={SlidesContainer} />
      </Switch>
  </Router>
);

export default App;
