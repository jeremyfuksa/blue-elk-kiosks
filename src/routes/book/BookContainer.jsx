import React from 'react';
import Book from './Book';

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <Book
        jsonUrl={this.props.jsonUrl}
        title={this.props.title}
      />
    );
  }
}

export default BookContainer;