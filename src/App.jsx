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
          path='/lonebear-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Lone Bear Guardian Roll'
              background='yellow-background'
              jsonUrl='http://localhost:5050/api/public/lonebearGuardians'
            />
          )}
        />
        <Route
          path='/sheshebe-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='She-She-Be Guardian Roll'
              background='yellow-background'
              jsonUrl='http://localhost:5050/api/public/sheshebeGuardians'
            />
          )}
        />
        <Route
          path='/lifetime-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Lifetime Guardian Roll'
              background='yellow-background'
              jsonUrl='http://localhost:5050/api/public/lifetimeGuardians'
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
              jsonUrl='http://localhost:5050/api/public/sessionElevations'
            />
          )}
        />
        <Route path='/photo-slide-show/' component={SlidesContainer} />
      </Switch>
  </Router>
);

export default App;
