import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ galleryItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { webformatURL, largeImageURL, tags } = galleryItem;

  return (
    <>
      <GalleryItem className="gallery-item" onClick={toggleModal}>
        <GalleryImg src={webformatURL} alt={tags} draggable="true" />
      </GalleryItem>
      {isModalOpen && (
        <Modal largeImageURL={largeImageURL} alt={tags} onCloseModal={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  galleryItem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
