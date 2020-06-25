import React from 'react';
import ImageList from './components/ImageList.jsx';
import Image from './components/Image.jsx';
import HideAd from './components/HideAd.jsx';
import ShowAd from './components/ShowAd.jsx';
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
      showAdFeedBack: false,
    };

    this.getPictures = this.getPictures.bind(this);
    this.getPagePictures = this.getPagePictures.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.handleShowAdFeedBack = this.handleShowAdFeedBack.bind(this);
    this.handleHideAdFeedBack = this.handleHideAdFeedBack.bind(this);
    this.renderAdShow = this.renderAdShow.bind(this);
  }

  componentDidMount() {
    this.getPictures();

  }

  //  on previous click changes state of currpage/prev page and grabs new pictures
  onPrevClick() {
    if (this.state.prevPage !== 0) {

      const cPage = this.state.currPage - 1;
      const pPage = this.state.prevPage - 1;
      this.setState({
        currPage: cPage,
        prevPage: pPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage, false);
      this.renderAdShow();
    } else {
      const cPage = this.state.maxPages;
      const pPage = this.state.maxPages - 1;
      this.setState({
        currPage: cPage,
        prevPage: pPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage, false);
      this.renderAdShow();
    }
  }

  //  on next click changes state of currpage/prev page and grabs new pictures
  onNextClick() {
    if(this.state.currPage !== this.state.maxPages) {
      const cPage = this.state.currPage + 1;
      const pPage = this.state.prevPage + 1;
      this.setState({
        currPage: cPage,
        prevPage: pPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage, false);
      this.renderAdShow();
    } else {
      const cPage = 1;
      const pPage = 0;
      this.setState({
        currPage: cPage,
        prevPage: pPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage, false);
      this.renderAdShow();
    }
  }

  //  grabs 5 pictures saved in state and renders
  getPagePictures(current, previous, showAd) {
    if(current !== this.state.maxPages) {

      const content = [];
      const start = previous * 5;
      const end = current * 5;

      //probably should have just pushed photoArr data and mapped that
      for (var i = start; i < end; i++) {
        content.push(<Image photo={this.state.photoArr[i]} key={this.state.photoArr[i]._id} showAd={showAd} />);
      }

      this.setState({
        photosPage: content,
      })
    } else {
      const content = [];
      const start = previous * 5;
      const end = this.state.photoArr.length;

      for (var i = start; i < end; i++) {
        content.push(<Image photo={this.state.photoArr[i]} key={this.state.photoArr[i]._id} showAd={showAd} />);
      }

      this.setState({
        photosPage: content,
      })
    }
  }

  //  grabs pictures from db by department
  getPictures() {
    /* Change the \s\S (selects all) and replace with main products department */
    axios.get('/api/products/[\s\S]*')
      .then((results) => {
        const pages = Math.ceil(results.data.length / 5);
        this.setState({
          photoArr: results.data,
          maxPages: pages,
        });
        this.getPagePictures(this.state.currPage, this.state.prevPage, false);
      });
  }

  //  sets state to render show feedback
  handleShowAdFeedBack() {
    this.getPagePictures(this.state.currPage, this.state.prevPage, true);
    this.setState({ showAdFeedBack: true });

  }

  // sets state to render hide feedback
  handleHideAdFeedBack() {
    this.getPagePictures(this.state.currPage, this.state.prevPage, false);
    this.setState({ showAdFeedBack: false });
  }

  //  renders show/ hide feedback
  renderAdShow() {
    if (this.state.showAdFeedBack) {
      return <HideAd onClick={this.handleHideAdFeedBack} />;
    } else {
      return <ShowAd onClick={this.handleShowAdFeedBack} />;
    }
  }

  render() {
    return (
      <div>
        <div>Sponsored products related to this item</div>
        <div>{`Page ${this.state.currPage} of ${this.state.maxPages}`}</div>
        <span onClick={this.onPrevClick}>&lang;</span>
        <ImageList photoArr={this.state.photoArr} maxPages={this.state.maxPages} content={this.state.photosPage} />
        {this.renderAdShow()}
        <span onClick={this.onNextClick}>&rang;</span>
      </div>
    );
  }
}

export default App;
