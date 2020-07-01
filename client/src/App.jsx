import React from 'react';
import {CarouselContainer, TopCarousel, SponsorWrapper, PageCountWrapper, ShowAdWrap} from './Styles.js';
import ImageList from './components/ImageList.jsx';
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
    if (this.state.currPage !== 1) {

      const cPage = this.state.currPage - 1;
      const pPage = this.state.currPage - 2;
      this.setState({
        currPage: cPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage);
      this.renderAdShow();
    } else {
      const cPage = this.state.maxPages;
      const pPage = this.state.maxPages - 1;
      this.setState({
        currPage: cPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage);
      this.renderAdShow();
    }
  }

  //  on next click changes state of currpage/prev page and grabs new pictures
  onNextClick() {
    if(this.state.currPage !== this.state.maxPages) {
      const cPage = this.state.currPage + 1;
      const pPage = this.state.currPage;
      this.setState({
        currPage: cPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage);
      this.renderAdShow();
    } else {
      const cPage = 1;
      const pPage = 0;
      this.setState({
        currPage: cPage,
        showAdFeedBack: false,
      });
      this.getPagePictures(cPage, pPage);
      this.renderAdShow();
    }
  }

  //  grabs 5 pictures saved in state and renders
  getPagePictures(current, previous) {
    if(current !== this.state.maxPages) {

      const content = [];
      const start = previous * 5;
      const end = current * 5;

      //probably should have just pushed photoArr data and mapped that
      for (var i = start; i < end; i++) {
        content.push(this.state.photoArr[i]);
      }

      this.setState({
        photosPage: content,
      })
    } else {
      const content = [];
      const start = previous * 5;
      const end = this.state.photoArr.length;

      for (var i = start; i < end; i++) {
        content.push(this.state.photoArr[i]);
      }

      this.setState({
        photosPage: content,
      })
    }
  }

  //  grabs pictures from db by department
  getPictures() {
    let index;
    if(window.location.pathname === "/") {
      index = Math.floor(Math.random() * 101);
    } else {
      index = parseInt(window.location.pathname.slice(1));
    }
    /* Change the [\s\S]* (selects all) and replace with main products department */
    axios.get(`/carousel/api/products/${index}`)
      .then((results) => {
        const pages = Math.ceil(results.data.length / 5);
        this.setState({
          photoArr: results.data,
          maxPages: pages,
        });
        this.getPagePictures(this.state.currPage, 0);
      });
  }

  //  sets state to render show feedback
  handleShowAdFeedBack() {
    this.setState({ showAdFeedBack: true });

  }

  // sets state to render hide feedback
  handleHideAdFeedBack() {
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
      <CarouselContainer>
        <TopCarousel>
          <SponsorWrapper>Sponsored products related to this item</SponsorWrapper>
          <PageCountWrapper>{`Page ${this.state.currPage} of ${this.state.maxPages}`} </PageCountWrapper>
        </ TopCarousel>
        <ImageList content={this.state.photosPage} showAd={this.state.showAdFeedBack} onPrevClick={this.onPrevClick} onNextClick={this.onNextClick} />
        <ShowAdWrap>{this.renderAdShow()} </ShowAdWrap>
      </CarouselContainer>
    );
  }
}

export default App;
