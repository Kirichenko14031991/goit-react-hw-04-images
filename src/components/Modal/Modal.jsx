import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled';

const Modal = ({ onCloseModal, largeImageURL, alt }) => {
  const onKeydown = (e) => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const onOverlayClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  });

  return (
    <Overlay className="overlay" onClick={onOverlayClick}>
      <ModalContent className="modal">
        <img src={largeImageURL} alt={alt} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
