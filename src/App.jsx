import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router, 
  Route,
  Routes 
} from 'react-router-dom';
import Menu from './routes/menu/Menu';
import RollContainer from './routes/roll/RollContainer';
import BookContainer from './routes/book/BookContainer';
import SlidesContainer from './routes/slides/SlidesContainer';
const { RAZZLE_DATA_SRC } = process.env;

// dev/production flag
// set to 'dev' if you want to use the local JSON data
// as your source. Set to 'bartle' to use the
// Blue Elk server as your data source.
const j = 'dev';

let apiSource = '';
if ( j === 'bartle') {
  apiSource = 'http://' + RAZZLE_DATA_SRC + ':5050/api/public/';
}

const App = () => (
  <Router>
      <Routes>
        <Route exact path='/' element={<Menu />} />
        <Route
          path='/founder-guardians/'
          element={(props) => (
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
          element={(props) => (
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
          element={(props) => (
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
          element={(props) => (
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
          element={(props) => (
            <BookContainer
              {...props}
              title='Book Of Memories'
              jsonUrl={`${apiSource}getMemories`}
            />
          )}
        />
        <Route
          path='/elevations/'
          element={(props) => (
            <RollContainer
              {...props}
              title='Session Elevations'
              background='blue-background'
              jsonUrl={`${apiSource}sessionElevations`}
              jsonSrc={j}
            />
          )}
        />
        <Route path='/photo-slide-show/' element={<SlidesContainer />} />
      </Routes>
  </Router>
);

export default App;
