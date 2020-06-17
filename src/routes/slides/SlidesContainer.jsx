import React from 'react';
import Slides from './Slides';
import photos from '../../data/photos.json';

class SlidesContainer extends React.Component {
  componentDidMount() {
    document.body.classList.add('slides');
  }
  render() {
    return(
      <Slides
        data={photos}
        name='test'
      />
    );
  }
}

export default SlidesContainer;