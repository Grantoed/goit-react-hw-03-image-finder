import { Component } from 'react';
import { Backdrop, ModalWindow, LargeImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    const { image, alt, closeModal } = this.props;
    return (
      <Backdrop onClick={closeModal} id="backdrop">
        <ModalWindow>
          <LargeImage src={image} alt={alt}></LargeImage>
        </ModalWindow>
      </Backdrop>
    );
  }
}
