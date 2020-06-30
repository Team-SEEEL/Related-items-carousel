import React from 'react';
import Image from './Image.jsx';
import {FlexBox, NextArrow, PrevArrow, ArrowContainer, NextArrowContainer, ImageContainer} from '../Styles.js';

function ImageList(props) {

  return (
    <FlexBox>
        <ArrowContainer><PrevArrow onClick={props.onPrevClick}>{`<`}</PrevArrow></ArrowContainer>
      {props.content.map(img => {
        return (
          <ImageContainer><Image photo={img} key={img._id} showAd={props.showAd} /></ImageContainer>
        )
      })
      }
       <NextArrowContainer><NextArrow onClick={props.onNextClick}>{`>`}</NextArrow></NextArrowContainer>
    </FlexBox>
  );
}

export default ImageList;
