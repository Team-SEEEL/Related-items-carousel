import React from 'react';
import Image from './Image.jsx';
import {FlexBox, NextArrow, PrevArrow, ArrowContainer, NextArrowContainer, ImageContainer} from '../Styles.js';

function ImageList(props) {
  return (
    <FlexBox viewWidth={props.viewWidth}>
        <ArrowContainer><PrevArrow onClick={props.onPrevClick}>{`<`}</PrevArrow></ArrowContainer>
      {props.content.map(img => {
        return (
          <ImageContainer key={'container_' + img._id}><Image photo={img} key={img._id} showAd={props.showAd} /></ImageContainer>
        )
      })
      }
       <NextArrowContainer><NextArrow onClick={props.onNextClick}>{`>`}</NextArrow></NextArrowContainer>
    </FlexBox>
  );
}

export default ImageList;
