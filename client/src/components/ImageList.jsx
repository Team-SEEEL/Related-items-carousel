import React from 'react';
import Image from './Image.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1,
      prevPage: 0,
    };
  }


  render() {

    return (
      <div>
        <span onClick={this.props.onPrevClick}>&lang;</span>
        {this.props.content}
        <span onClick={this.props.onNextClick}>&rang;</span>
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