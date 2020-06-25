import React from 'react';
import Image from './Image.jsx';
import HideAd from './HideAd.jsx';
import ShowAd from './ShowAd.jsx';

class ImageList extends React.Component {
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
      <div>

        {this.props.content}
        {this.renderAdShow()}

      </div>
    );
  }
}

export default ImageList;

// {this.props.photoArr.map((photo) => {
//   return <Image photo={photo} key={photo._id} />;
// })
// }

// {[<Image />, <Image />]}