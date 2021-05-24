import getReactWithCX from 'react-cx';
import styles from './Roll.module.scss';

const React = getReactWithCX(styles);

class Roll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRecords: this.props.data.size,
      pageContent: [],
      counter: 0,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchFifty();
    this.interval = setInterval(() => this.fetchFifty(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchFifty = () => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < 55 * page; i++) {
      if (i == numRecords - 1) {
        break;
      } else {
        pageData.push(this.props.data[i]);
        tempCounter = i;
      }
    }
    this.setState({
      pageContent: pageData
    });
    if (counter === numRecords - 1) {
      this.setState({
        counter: 0,
        page: 1
      });
    } else {
      this.setState(prevState => ({
        page: prevState.page + 1,
        counter: tempCounter + 1
      }));
    }
    return;
  }

  render() {
    const { pageContent } = this.state;
    return (
      <div cx='guardian-container'>
        <div cx="title"><h1>Blue Elk Tribal Guardian Roll</h1></div>
        {pageContent.map((guardian) => (
          <div cx='guardian' key={guardian.guardianName}>
            <div cx='guardian-name'>{guardian.guardianName}</div>
            {guardian.tribalName !== '' ? <div cx='tribal-name'>{guardian.tribalName}</div> : ''}
          </div>
        ))}
      </div>
    );
  }
}

export default Roll;
