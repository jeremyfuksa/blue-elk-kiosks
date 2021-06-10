import React from 'react';
import Roll from './Roll';
import tribalGuardians from '../../data/lonebearGuardians.json';

class RollContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Roll
        data={tribalGuardians.data}
        jsonUrl={this.props.jsonUrl}
        title={this.props.title}
        background={this.props.background}
      />
    );
  }
}

export default RollContainer;