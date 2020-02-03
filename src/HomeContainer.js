import React from 'react';
import Home from './Home';
import data from './data.json';

class HomeContainer extends React.Component {
  render() {
    return(
      <Home data={data} />
    );
  }
}

export default HomeContainer;