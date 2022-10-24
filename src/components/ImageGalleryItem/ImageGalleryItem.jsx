import { Component } from 'react';
import { PhotoCard, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = e => {
    if (e.target.id === 'backdrop' || e.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { previewImgSRC, largeImgSRC, alt } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <PhotoCard onClick={this.openModal}>
          <Image src={previewImgSRC} alt={alt} />
        </PhotoCard>
        {isModalOpen && (
          <Modal image={largeImgSRC} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
