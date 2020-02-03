import getReactWithCX from 'react-cx';
import styles from './Home.module.scss';

const React = getReactWithCX(styles);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      numRecords: this.props.data.size,
      guardianName: '',
      tribalName: ''
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const item = this.props.data[this.state.counter];
      if (this.state.counter > this.state.numRecords) {
        this.setState({
          counter: 0,
          guardianName: item.guardianName,
          tribalName: item.tribalName
        });
      } else {
        this.setState(prevState =>({
          counter: prevState.counter + 1,
          guardianName: item.guardianName,
          tribalName: item.tribalName
        }));
      }
    }, 5000);
  }

  render() {
    return(
      <div cx='guardian-container'>
        <div cx='guardian'>
          <div cx='guardian-name'>{this.state.guardianName}</div>
          {this.state.tribalName != '' ? <div cx='tribal-name'>{this.state.tribalName}</div> : ''}
        </div>
      </div>
    );
  }
}

export default Home;
