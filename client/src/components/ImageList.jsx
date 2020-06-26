import React from 'react';
import Image from './Image.jsx';


class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };

  }


  render() {

    return (
      <div>

        {this.props.content.map(img => {
          return (
            <Image photo={img} key={img._id}/>
          )
        })
        }


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