import React from 'react';
import { createPortal } from 'react-dom';

//  grab element with id modal
const modalRoot = document.getElementById('modal-carousel');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    //  create an element div for modal
    this.element = document.createElement('div');
  }

  //  append created div to div#modal
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  //  remove created div when modal is unmounted
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

export default Modal;
