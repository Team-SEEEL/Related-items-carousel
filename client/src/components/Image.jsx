import React from 'react';
import HideAd from './HideAd.jsx';
import ShowAd from './ShowAd.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdFeedBack: false,
    };
    this.handleShowAdFeedBack = this.handleShowAdFeedBack.bind(this);
    this.handleHideAdFeedBack = this.handleHideAdFeedBack.bind(this);
    this.renderAdShow = this.renderAdShow.bind(this);
  }

  handleShowAdFeedBack() {
    this.setState({ showAdFeedBack: true });
  }

  handleHideAdFeedBack() {
    this.setState({ showAdFeedBack: false });
  }

  renderAdShow() {
    if (this.state.showAdFeedBack) {
      return <HideAd onClick={this.handleHideAdFeedBack} />;
    } else {
      return <ShowAd onClick={this.handleShowAdFeedBack} />;
    }
  }

  render() {

    return (
      <span>

        <img src={this.props.photo.imageUrl}></img>
        <div className="title">{this.props.photo.title}</div>
        <div className="rating">{this.props.photo.rating}</div>
        <div className="review">4 out of 5</div>
        <div className="price">${this.props.photo.price}</div>
        <div className="prime">TRUE</div>
      </span>
    );
  }
}

export default Image;

