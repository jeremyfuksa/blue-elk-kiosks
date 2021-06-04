import getReactWithCX from 'react-cx';
import styles from './Roll.module.scss';

const React = getReactWithCX(styles);

class Roll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRecords: this.props.data.length,
      pageContent: [],
      counter: 0,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchNames();
    this.interval = setInterval(() => this.fetchNames(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchNames = () => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < 55 * page; i++) {
      if (i >= numRecords) {
        tempCounter = 0;
        this.setState({
          // pageContent: [],
          counter: tempCounter,
          page: 1
        });
      } else {
        pageData.push(this.props.data[i]);
        tempCounter = i;
        console.log(tempCounter);
      }
    }
    this.setState({
      pageContent: pageData,
      counter: tempCounter
    });
    this.setState(prevState => ({
      page: prevState.page + 1,
      counter: tempCounter + 1
    }));
    return;
  }

  render() {
    const { pageContent } = this.state;
    return (
      <div cx={this.props.background}>
        <div cx='guardian-container'>
          <div cx='title'><h1>{this.props.title}</h1></div>
          {pageContent.map((guardian) => (
            <div cx='guardian' key={guardian.guardianName}>
              <div cx='guardian-name'>{guardian.guardianName}</div>
              {guardian.tribalName !== '' ? <div cx='tribal-name'>{guardian.tribalName}</div> : ''}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Roll;
