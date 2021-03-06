import React from 'react';
import Slides from './Slides';
// import photos from '../../data/photos.json';

class SlidesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        "http://localhost:3000/photos/test/photo01.jpg",
        "http://localhost:3000/photos/test/photo02.jpg",
        "http://localhost:3000/photos/test/photo03.jpg",
      ]
    };
  }
  componentDidMount() {
    document.body.classList.add('slides');
  }
  render() {
    return(
      <Slides
        data={this.state.photos}
        name='test'
      />
    );
  }
}

export default SlidesContainer;