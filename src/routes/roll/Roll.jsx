import founderGuardians from '../../data/founderGuardians.json';
import lifetimeGuardians from '../../data/lifetimeGuardians.json';
import lonebearGuardians from '../../data/lonebearGuardians.json';
import sheshebeGuardians from '../../data/sheshebeGuardians.json';
import axios from 'axios';
import getReactWithCX from 'react-cx';
import styles from './Roll.module.scss';
import whiteSpinner from './white-spinner.svg';
import blackSpinner from './black-spinner.svg';

const React = getReactWithCX(styles);

class Roll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRecords: 0,
      pageContent: [],
      counter: 0,
      page: 1
    };
  }

  componentDidMount() {
    console.log('jsonUrl: ' + this.props.jsonUrl);
    console.log('jsonSrc: ' + this.props.jsonSrc);
    const self = this;
    this.fetchData()
      .then((data) => {
        const dynamicInterval = data.length > 50 ? 10000 : 60000;
        self.setState({ numRecords: data.length });
        self.interval = setInterval(() => self.fetchNames(data), dynamicInterval);
      })
      .catch(this.failureCallback);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  failureCallback = (error) => {
    console.log(`Error fetching data: ${error}`);
  };
  
  fetchData = () => {
    const { jsonSrc, jsonUrl } = this.props;
    if (jsonSrc === 'dev') {
      let data;
      switch (jsonUrl) {
        case 'founderGuardians':
          data = founderGuardians;
          break;
        case 'lifetimeGuardians':
          data = lifetimeGuardians;
          break;
        case 'lonebearGuardians':
          data = lonebearGuardians;
          break;
        case 'sheshebeGuardians':
          data = sheshebeGuardians;
          break;
        default:
          data = [];
      }
      return Promise.resolve(data);
    } else {
      return axios
        .get(jsonUrl)
        .then((response) => response.data.data)
        .catch(this.failureCallback);
    }
  };
  
  fetchNames = (data) => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < 40 * page; i++) {
      if (i >= numRecords) {
        tempCounter = 0;
        this.setState({
          counter: tempCounter,
          page: 1
        });
      } else {
        pageData.push(data[i]);
        tempCounter = i;
      }
    }
    this.setState({
      pageContent: pageData,
      counter: tempCounter
    });
    this.setState((prevState) => ({
      page: prevState.page + 1,
      counter: tempCounter + 1
    }));
    return;
  };
  
  render() {
    const { pageContent } = this.state;
    return (
      <div cx={this.props.background}>
        <div cx='guardian-container'>
          <div cx='title'>
            <h1>{this.props.title}</h1>
          </div>
          {this.state.counter < 2 ? <div cx='loader'><img src={this.props.background == 'yellow-background' ? blackSpinner : whiteSpinner}></img></div> : ''}
          {pageContent.map((guardian) => (
            <div cx={['guardian', this.state.numRecords > 50 ? 'longList' : 'shortList']} key={`${guardian.Full_Name ? guardian.Full_Name : guardian.Guardian_Display_Name}_${this.state.counter}`}>
              <div cx='guardian-name'>{guardian.Full_Name ? guardian.Full_Name : guardian.Guardian_Display_Name}</div>
              {guardian.Responsibility_Display ? <div cx='tribal-name'>{`${guardian.Responsibility_Display} ${guardian.Tribal_Name}`}</div> : <div cx='tribal-name'>{`${guardian.Tribal_Name}`}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Roll;
