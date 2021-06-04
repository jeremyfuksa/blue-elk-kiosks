import React from 'react';
import Roll from './Roll';
import tribalGuardians from '../../data/tribalGuardians.json';

class RollContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Roll
        data={tribalGuardians}
        title={this.props.title}
        background={this.props.background}
      />
    );
  }
}

export default RollContainer;