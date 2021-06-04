import getReactWithCX from 'react-cx';
import styles from './Slides.module.scss';

const React = getReactWithCX(styles);

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
      currentPhotoPath: null,
      totalLength: props.data.length
    }
  }

  componentDidMount() {
    console.log(this.props.data);
    this.fetchPhoto(this.props.data);
    this.interval = setInterval(() => this.fetchPhoto(this.props.data), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchPhoto = (data) => {
    const { currentPhotoIndex, totalLength } = this.state;
    this.setState({
      currentPhotoPath: data[currentPhotoIndex]
    });
    if( currentPhotoIndex === totalLength - 1) {
      this.setState({ currentPhotoIndex: 0});
    } else {
      this.setState(prevState => ({
        currentPhotoIndex: prevState.currentPhotoIndex + 1
      }));
    }
  }

  render () {
    return (
      <div cx='black-background'>
        <div cx='photo-container' style={{ backgroundImage: `url(${this.state.currentPhotoPath})` }}></div>
      </div>
    );
  }
}

export default Slides;