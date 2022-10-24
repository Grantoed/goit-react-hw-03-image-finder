import { Loader } from 'components/Loader/Loader';
import { ImageGallery, LoadMoreBtn } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ images, isLoading, handleLoadMore }) => {
  return (
    <>
      <ImageGallery>
        {images.map(image => {
          return (
            <GalleryItem
              key={image.id}
              loading={isLoading}
              previewImgSRC={image.webformatURL}
              largeImgSRC={image.largeImageURL}
              alt={image.tags}
            ></GalleryItem>
          );
        })}
      </ImageGallery>
      {images.length > 0 && (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </>
  );
};
