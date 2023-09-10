import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
