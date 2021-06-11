import axios from 'axios';
import getReactWithCX from 'react-cx';
import styles from './Roll.module.scss';

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
    axios.get(this.props.jsonUrl)
    .then (function(response){
      const data = response.data;
      this.setState({numRecords: data.length});
      this.fetchNames(data);
      this.interval = setInterval(() => this.fetchNames(data), 10000);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchNames = (data) => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < 50 * page; i++) {
      if (i >= numRecords) {
        tempCounter = 0;
        this.setState({
          // pageContent: [],
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
          <div cx='title'><h1>{this.props.title}</h1></div>
          {pageContent.map((guardian) => (
            <div cx='guardian' key={guardian.Full_Name ? guardian.Full_Name : guardian.Guardian_Display_Name}>
              <div cx='guardian-name'>{guardian.Full_Name ? guardian.Full_Name : guardian.Guardian_Display_Name}</div>
              {guardian.tribalName !== '' ? <div cx='tribal-name'>{`${guardian.Responsibility_Display} ${guardian.Tribal_Name}`}</div> : ''}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Roll;
