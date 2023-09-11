import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchbarSection,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ formSubmitHandler }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [prevSearchQuery, setPrevSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchQuery(value.toLowerCase().trim());
  };

  const reset = () => {
    setSearchQuery('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      toast.info('Please enter a search query.');
      return;
    }

    if (searchQuery === prevSearchQuery) {
      toast.info(
        `"${searchQuery}" search has already been completed. Please enter a different search query.`
      );
      reset();
      return;
    }

    setPrevSearchQuery(searchQuery);
    formSubmitHandler(searchQuery);
    reset();
  };

  return (
    <SearchbarSection>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>SEARCH</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={searchQuery}
        />
      </SearchForm>
    </SearchbarSection>
  );
};

Searchbar.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};

export default Searchbar;
