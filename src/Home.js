import getReactWithCX from 'react-cx';
import styles from './Home.module.scss';

const React = getReactWithCX(styles);

class Home extends React.Component {
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
    this.interval = setInterval(() => this.fetchFifty(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchFifty = () => {
    const { counter, page, numRecords } = this.state;
    if (counter === numRecords - 1) {
      this.setState({
        counter: 0,
        page: 1
      });
    }
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
    this.setState(prevState => ({
      pageContent: pageData,
      page: prevState.page + 1,
      counter: tempCounter + 1
    }));
    return;
  }

  render() {
    const { pageContent } = this.state;
    return (
      <div className='guardian-container'>
        <div className="title"><h1>Blue Elk Tribal Guardian Roll</h1></div>
        {pageContent.map((guardian,index) => (
          <div className='guardian' key={index}>
            <div className='guardian-name'>{guardian.guardianName}</div>
            {guardian.tribalName !== '' ? <div className='tribal-name'>{guardian.tribalName}</div> : ''}
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
