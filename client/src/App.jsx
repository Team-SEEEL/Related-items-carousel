import React from 'react';
import ImageList from './components/ImageList.jsx';
import Image from './components/Image.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArr: [],
      maxPages: 0,
      currPage: 1,
      prevPage: 0,
      photosPage: [],
    };

    this.getPictures = this.getPictures.bind(this);
    this.getPagePictures = this.getPagePictures.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }

  componentDidMount() {
    this.getPictures();

  }

  onPrevClick() {
    const cPage = this.state.currPage - 1;
    const pPage = this.state.prevPage -1;
    this.setState({
      currPage: cPage,
      prevPage: pPage,
    });
    this.getPagePictures(this.state.currPage, this.state.prevPage)
  }

  onNextClick() {
    const cPage = this.state.currPage + 1;
    const pPage = this.state.prevPage +1;
    this.setState({
      currPage: cPage,
      prevPage: pPage,
    });
    this.getPagePictures(this.state.currPage, this.state.prevPage)
  }

  getPagePictures(current, previous) {
    const content = [];
    const start = previous * 5;
    const end = current * 5;

    for (var i = start; i < end; i++) {
      content.push(<Image photo={this.state.photoArr[i]} key={this.state.photoArr[i]._id} />);
    }

    this.setState({
      photosPage: content,
    })
  }

  getPictures() {
    /* Change the \s\S and replace with main products department */
    axios.get('/api/products/[\s\S]*')
      .then((results) => {
        const pages = Math.ceil(results.data.length / 5);
        this.setState({
          photoArr: results.data,
          maxPages: pages,
        });
        this.getPagePictures(this.state.currPage, this.state.prevPage);
      });
  }

  render() {
    return (
      <div>
        <ImageList photoArr={this.state.photoArr} maxPages={this.state.maxPages} content={this.state.photosPage} onNextClick={this.onNextClick} onPrevClick={this.onPrevClick} />
      </div>
    );
  }
}

export default App;
