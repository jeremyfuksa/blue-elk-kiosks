import React from 'react';
import Roll from './Roll';

class RollContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Roll
        jsonUrl={this.props.jsonUrl}
        title={this.props.title}
        background={this.props.background}
      />
    );
  }
}

export default RollContainer;