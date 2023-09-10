import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ galleryItems }) {
  return (
    <ImageGalleryList>
      {galleryItems.map(galleryItem => {
        return (
          <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
