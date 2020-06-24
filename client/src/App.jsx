import React from 'react';
import ImageList from './components/ImageList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArr: [],
    };

    this.getPictures = this.getPictures.bind(this);
  }

  componentDidMount() {
    this.getPictures();
  }

  getPictures() {
    axios.get('/api/products')
      .then((results) => {
        this.setState({
          photoArr: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <span>&lang;</span>
        <ImageList photoArr={this.state.photoArr} />
        <span>&rang;</span>
      </div>
    );
  }
}

export default App;
