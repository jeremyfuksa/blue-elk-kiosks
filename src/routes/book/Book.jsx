import axios from 'axios';
import getReactWithCX from 'react-cx';
import styles from './Book.module.scss';
import logo from '../../micosay-logo-color.svg';

const React = getReactWithCX(styles);

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.state = {
      numRecords: 0,
      pageContent: [],
      counter: 0,
      page: 1,
      height: 0
    };
  }

  componentDidMount() {
    const self = this;
    axios.get(this.props.jsonUrl)
    .then(function(response) {
      const data = response.data.data;
      const filteredData = data.filter((memory) => memory.MemoryStatusCd.includes('A'));
      console.log(filteredData);
      self.setState({numRecords: filteredData.length});
      self.fetchMemory(filteredData);
      self.interval = setInterval(() => self.fetchMemory(filteredData), 45000);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchMemory = (data) => {
    const { counter, page, numRecords } = this.state;
    let pageData = [];
    let tempCounter;
    for (let i = counter; i < page; i++) {
      if(i == (numRecords - 1)) {
        console.log('Last Memory');
        tempCounter = 0;
        this.setState({
          counter: tempCounter,
          page: 1
        });
        return;
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

  render () {
    const { pageContent } = this.state;
    return(
      <div cx='bom-background'>
        <div cx='bom-container'>
          {pageContent.map((memory) => (
            <div cx='memory' key={memory.memoryId}>
              <div cx='title-container'>
                <div cx='title'>
                  <h1>{memory.Subject}</h1>
                </div>
              </div>
              <div cx='centered-content' ref={this.contentRef}>
                <div cx='mentor'>
                  Memory of {memory.FirstName} {memory.LastName}
                </div>
                <div cx='memory_body'>
                  {memory.MemoryText.length > 1340 ? memory.MemoryText.substring(0,1339) + '...' : memory.MemoryText}
                </div>
                <div cx='author'>&mdash; {memory.SubmitterFirstName} {memory.SubmitterLastName}</div>
              </div>
            </div>
          ))}
          <footer>
            <img cx='mos-logo' src={logo} alt='logo' />
          </footer>
        </div>
      </div>
    );
  }
}

export default Book;
