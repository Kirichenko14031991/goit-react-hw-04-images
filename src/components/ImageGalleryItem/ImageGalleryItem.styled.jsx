import styled from 'styled-components';

export const GalleryItem = styled.li``;

export const GalleryImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;
