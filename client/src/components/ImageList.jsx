import React from 'react';
import Image from './Image.jsx';

function ImageList(props) {

  return (
    <div>

      {props.content.map(img => {
        return (
          <Image photo={img} key={img._id} showAd={props.showAd} />
        )
      })
      }

    </div>
  );
}

export default ImageList;
