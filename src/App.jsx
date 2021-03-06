import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Menu from './routes/menu/Menu';
import RollContainer from './routes/roll/RollContainer';
import BookContainer from './routes/book/BookContainer';
import SlidesContainer from './routes/slides/SlidesContainer';
const history = createMemoryHistory();
const { RAZZLE_DATA_SRC } = process.env;
const apiSource = 'http://' + RAZZLE_DATA_SRC + ':5050/api/public/';
const App = () => (
  <Router history={history}>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route
          path='/tribal-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Founder Guardian Roll'
              background='red-background'
              jsonUrl={`${apiSource}founderGuardians`}
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
              jsonUrl={`${apiSource}lonebearGuardians`}
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
              jsonUrl={`${apiSource}sheshebeGuardians`}
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
              jsonUrl={`${apiSource}lifetimeGuardians`}
            />
          )}
        />
        <Route
          path='/book-of-memories/'
          render={(props) => (
            <BookContainer
              {...props}
              title='Book Of Memories'
              jsonUrl={`${apiSource}getMemories`}
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
              jsonUrl={`${apiSource}sessionElevations`}
            />
          )}
        />
        <Route path='/photo-slide-show/' component={SlidesContainer} />
      </Switch>
  </Router>
);

export default App;
