import styled from 'styled-components';

export const SearchbarSection = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: gold;
  border: 30px solid;
  border-color: blue;
  border-radius: 3px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: green;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  font-size: 12px;
  border-radius: 3px;

  &:hover {
    background-color: pink;
  }

  &::before {
    content: 'SEARCH';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;

  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
