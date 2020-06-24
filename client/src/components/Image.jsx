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
        <img></img>
        <div className="title">BOOKS AND STUFF</div>
        <div className="rating">4</div>
        <div className="review">4 out of 5</div>
        <div className="price">$4.00</div>
        <div className="prime">TRUE</div>
      </div>
    );
  }
}

export default Image;
