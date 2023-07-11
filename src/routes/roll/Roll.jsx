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
    console.log(this.props.jsonUrl);
    const self = this;
    let data;
    if (this.props.jsonSrc == 'dev') {
      switch(this.props.jsonUrl) {
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
      }
    } else {
      axios.get(this.props.jsonUrl)
      .then (function(response){
        data = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
    const dynamicInterval = data.length > 50 ? 10000 : 60000;
    console.log(data);
    self.setState({numRecords: data.length});
    self.interval = setInterval(() => self.fetchNames(data), dynamicInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchNames = (data) => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < (40 * page); i++) {
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
