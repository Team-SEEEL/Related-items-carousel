import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'in'
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.imageUrl}></img>
        <div className="title">{this.props.photo.title}</div>
        <div className="rating">{this.props.photo.rating}</div>
        <div className="review">4 out of 5</div>
        <div className="price">${this.props.photo.price}</div>
        <div className="prime">TRUE</div>
      </div>
    );
  }
}

export default Image;

