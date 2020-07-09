import React from 'react';
import { ProductName, PricePrime, Stars, FeedbackWrapper, ModalWrapper, ModalOverlay, PhotoContainer, CarouselPhotoContainer, ModalHeader, FloatTitlePrice, PriceColor, FormsContainer, ModalCloseButton } from '../Styles.js';
import Modal from './Modal.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  renderFeedback() {
    if (this.props.showAd) {
      const { showModal } = this.state;
      return (
        <>
          <FeedbackWrapper className="modal-toggle-button" onClick={this.toggleModal}>
            Feedback
          </FeedbackWrapper>
          {
            showModal ? (
                <Modal>
                  <ModalWrapper>
                    <ModalHeader>Share your feedback</ModalHeader>
                    <PhotoContainer src={this.props.photo.imageUrl}></PhotoContainer>
                    <FloatTitlePrice>{this.props.photo.title}
                      <br />
                      <PriceColor>${this.props.photo.price}</PriceColor>
                    </FloatTitlePrice>
                    <br />
                    <FormsContainer>
                      <form action="">
                        <label><b>This item is:</b></label>
                        <br />
                        <input type="radio" name="feedback" value="1" />
                        Unrelated to what I'm shopping for
                        <br />
                        <input type="radio" name="feedback" value="2" />
                        Inappropriate or offensive
                        <br />
                        <input type="radio" name="feedback" value="0" />
                        Other
                        <br />
                      </form>
                      <form action="">
                        <label><b>Comments</b></label>
                        <br />
                        <textarea rows="10" cols="38" placeholder="Include additional details here">
                        </textarea>
                        <br />
                        <button>Cancel</button>
                        <input type="submit" value="Send feedback" />
                      </form>
                      <ModalCloseButton className="modal-close" onClick={this.toggleModal}>X</ModalCloseButton>
                    </FormsContainer>
                  </ModalWrapper>
                  <ModalOverlay onClick={this.toggleModal}/>
                </Modal>

            ) : null
          }
        </>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderFeedback()}
        <br />
        <CarouselPhotoContainer src={this.props.photo.imageUrl}></CarouselPhotoContainer>
        <ProductName>{this.props.photo.title}</ProductName>
        <Stars rating={this.props.photo.rating}></Stars>
        <PricePrime>${this.props.photo.price} PRIME</PricePrime>
      </div>
    );
  }
}

export default Image;
