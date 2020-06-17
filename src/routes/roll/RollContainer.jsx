import React from 'react';
import Roll from './Roll';
import tribalGuardians from '../../data/tribalGuardians.json';

class RollContainer extends React.Component {
  componentDidMount() {
    document.body.classList.add('roll');
  }
  render() {
    return(
      <Roll data={tribalGuardians} />
    );
  }
}

export default RollContainer;