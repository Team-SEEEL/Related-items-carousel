import React from 'react';
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
          <div
            className="modal-toggle-button"
            onClick={this.toggleModal}
          >
            Feedback
          </div>
          {
            showModal ? (
              <Modal>
                <h1>Share your feedback</h1>
                <img src={this.props.photo.imageUrl}></img>
                <div>{this.props.photo.title}</div>
                <div>${this.props.photo.price}</div>
                <form action="">
                  <label>This item is:</label>
                  <br />
                  <input type="radio" name="feedback" value="male" />
                  Unrelated to what I'm shopping for
                  <br />
                  <input type="radio" name="feedback" value="female" />
                  Inappropriate or offensive
                  <br />
                  <input type="radio" name="feedback" value="other" />
                  Other
                  <br />
                </form>
                <form action="/action_page.php">
                  <label>Comments</label> <br />
                  <textarea rows="4" cols="50">
                  </textarea>
                  <br />
                  <button>Cancel</button>
                  <input type="submit" value="Send feedback" />
                </form>
                <button className="modal-close" onClick={this.toggleModal}>X</button>
              </Modal>
            ) : null
          }
        </>
      );
    } else {
      return;
    }
  }

  render() {


    return (
      <span>
        {this.renderFeedback()}
        <br />
        <img src={this.props.photo.imageUrl}></img>
        <div className="title">{this.props.photo.title}</div>
        <div className="rating">{this.props.photo.rating}</div>
        <div className="review">4 out of 5</div>
        <div className="price">${this.props.photo.price}</div>
        <div className="prime">TRUE</div>
      </span>
    );
  }
}

export default Image;

