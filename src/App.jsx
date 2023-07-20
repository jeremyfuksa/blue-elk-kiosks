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

// dev/production flag
// set to 'dev' if you want to use the local JSON data
// as your source. Set to 'bartle' to use the
// Blue Elk server as your data source.
const j = 'bartle';

let apiSource = '';
if ( j === 'bartle') {
  apiSource = 'http://' + RAZZLE_DATA_SRC + ':5050/api/public/';
}
const App = () => (
  <Router history={history}>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route
          path='/founder-guardians/'
          render={(props) => (
            <RollContainer
              {...props}
              title='Founder Guardian Roll'
              background='red-background'
              jsonUrl={`${apiSource}founderGuardians`}
              jsonSrc={j}
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
              jsonSrc={j}
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
              jsonSrc={j}
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
              jsonSrc={j}
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
              jsonSrc={j}
            />
          )}
        />
        <Route path='/photo-slide-show/' component={SlidesContainer} />
      </Switch>
  </Router>
);

export default App;
