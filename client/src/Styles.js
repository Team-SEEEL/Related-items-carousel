import styled from 'styled-components';

// styles for Image.jsx
const ProductName = styled.div`
  color: #0066c0;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  font-family: "Amazon Ember",Arial,sans-serif;
  font-size: 13px;
  line-hieght: 19px;

  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

const PricePrime = styled.div`
  color: #B12704!important;
  cursor: pointer;
  font-family:"Amazon Ember",Arial,sans-serif;
  font-size: 17px!important;
  font-weight: 400!important;
`;

const Stars = styled.div`
--percent: ${(props) => `calc(${props.rating}/ 5 * 100%)`};
--star-color: rgba(100, 100, 100, .9);
--star-background: #fc0;

display: inline-block;
font-size: 20px;
font-family: Times;
line-height: 1;

&::before {
  content: '★★★★★';
  letter-spacing: 3px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const FeedbackWrapper = styled.div`
  background: rgba(240,247,252,.8);
  border-top: 1px solid #6daee1;
  border-bottom: 1px dotted #6daee1;
  color: #0066c0;
  height: 12px;
  position: absolute;
  width: 150px;
  z-index: 2;
  cursor: pointer;
  font-family: "Amazon Ember",Arial,sans-serif;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 17px;
`;

const ModalWrapper = styled.div`
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 15vh auto;
  display: table;
  width: 350px;
  height: 442px;
  box-shadow: 0 5px 10px 2px rgba(195,192,192,.5);
  text-align: left;
  z-index: 10;
  border-radius: 3px;
`;

const ModalOverlay = styled.div`
  border: 0px;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity 1s ease;
`;

const PhotoContainer = styled.img`
  float:left;
  height: 60px;
  width: 60px;
  padding: 8px;
`;

const CarouselPhotoContainer = styled.img`
  height: 160px;
  width: 160px;
`;

const ModalHeader = styled.div`
  background:linear-gradient(to left, #f7f8fa, #e7e9ec);
  border-radius: 4px 4px 0 0;
  font-weight: 700;
  font-size: 13px;
  font-family: "Amazon Ember",Arial,sans-serif;
  padding: 10px 0px 10px 15px;
  border-bottom:1px solid #cdcdcd;
`;

const FloatTitlePrice = styled.div`
  white-space: nowrap;
  overflow: hidden;
  padding: 15px;
  font-family: "Amazon Ember",Arial,sans-serif;
  text-overflow: ellipsis;
`;

const PriceColor = styled.div`
  color: #B12704!important;
`;

const FormsContainer = styled.div`
  padding: 15px;
  font-family: "Amazon Ember",Arial,sans-serif;
`;

const ModalCloseButton = styled.button`
position: absolute;
right: 6px;
top: 5px;
cursor: pointer;
border: none;
font-size: 20px;
`;


// Styles for ImageList.jsx
const FlexBox = styled.div`
  display: flex;
  align-content: center;
  height: 288.2px;
  width: ${(props) => `${props.viewWidth}px`};
`;

//964 px
const NextArrow = styled.button`
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  border: solid 1px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-radius: 3px;
  height: 37px;
  width: 37px;
  display:inline-block;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
  outline-color: orange;
`;

const PrevArrow = styled.button`
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  border: solid 1px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-radius: 3px;
  height: 37px;
  width: 37px;
  display:inline-block;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
  outline-color: orange;
`;

const ArrowContainer = styled.div`
  margin-top: 110.5px;
  padding-left: 3px;
`;

const NextArrowContainer = styled.div`
  margin-top: 110.5px;
  margin-left: auto;
  margin-right: 20px;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  padding-left: 14px;
  width: 174px;
`;

// Styles for App.jsx
const CarouselContainer = styled.div`
  height:350.6px;
  width: ${(props) => `${props.viewWidth}px`};
  align-content: center;
  border-top: 1px solid #E6E6E6;
  border-bottom:1px solid #E6E6E6;
`;

const TopCarousel = styled.div`
  height: 44px;
`;

const SponsorWrapper = styled.div`
  color: #C60!important;
  font-size: 16px!important;
  font-weight: bold;
  font-family: verdana,arial,helvetica,sans-serif!important;
  width: 635px;
  Height: 21px;
  line-height: 32px;
`;

const PageCountWrapper = styled.div`
  font-size: 13px!important;
  line-height: 19px!important;
  padding-right: 5px;
  text-align: right!important;
  font-family: "Amazon Ember",Arial,sans-serif;
`;

const ShowAdWrap = styled.div`
  font-family: arial;
  font-size: 11px;
  text-align: right;
  padding-right: 5px;
  color: #0066C0;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

export { ProductName, PricePrime, Stars, FeedbackWrapper, ModalWrapper, ModalOverlay, PhotoContainer,CarouselPhotoContainer, ModalHeader, FloatTitlePrice, PriceColor, FormsContainer, ModalCloseButton, FlexBox, NextArrow, PrevArrow, ArrowContainer, NextArrowContainer, ImageContainer, CarouselContainer, TopCarousel, SponsorWrapper, PageCountWrapper, ShowAdWrap,
};
