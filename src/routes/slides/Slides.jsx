import getReactWithCX from 'react-cx';
import styles from './Slides.module.scss';

const React = getReactWithCX(styles);

class Slides extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  
  fetchPhoto = () => {

  }

  render () {
    return (
      <div>
        <h1>Slides</h1>
      </div>
    );
  }
}

export default Slides;