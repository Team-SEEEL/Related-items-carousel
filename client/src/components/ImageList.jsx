import React from 'react';
import Image from './Image.jsx';

function ImageList(props) {
  return (
    <div>
      { props.photoArr.map((photo) => {
        return <Image photo={photo} key={photo._id} />;
      })
      }
    </div>
  );
}

export default ImageList;

