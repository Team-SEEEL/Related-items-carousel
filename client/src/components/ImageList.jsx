import React from 'react';
import Image from './Image.jsx';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  align-content: center;
  height: 275px;
  width: 964 px;
  background: pink;
`;

const NextArrow = styled.button`
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  border: solid 1px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-radius: 3px;
  height: 37px;
  width: 34px;
  display:inline-block;
  padding: 0px;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
`;

const PrevArrow = styled.button`
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  border: solid 1px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-radius: 3px;
  height: 37px;
  width: 34px;
  display:inline-block;
  padding: 0px;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
`;

const ArrowContainer = styled.div`
  margin-top: 50px;
`;

function ImageList(props) {

  return (
    <FlexBox>
        <ArrowContainer><PrevArrow onClick={props.onPrevClick}>{`<`}</PrevArrow></ArrowContainer>
      {props.content.map(img => {
        return (
          <Image photo={img} key={img._id} showAd={props.showAd} />
        )
      })
      }
       <ArrowContainer><NextArrow onClick={props.onNextClick}>{`>`}</NextArrow></ArrowContainer>
    </FlexBox>
  );
}

export default ImageList;
