import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchbarSection,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = { searchQuery: '', prevSearchQuery: '' };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.toLowerCase().trim() });
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (!searchQuery) {
      toast.info('Please enter a search query.');
      return;
    }

    if (searchQuery === this.state.prevSearchQuery) {
      toast.info(
        `"${searchQuery}" search has already been completed. Please enter a different search query.`
      );
      this.reset();
      return;
    }

    this.setState({ prevSearchQuery: searchQuery });
    this.props.formSubmitHandler(searchQuery);
    this.reset();
  };

  render() {
    return (
      <SearchbarSection>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>SEARCH</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
        </SearchForm>
      </SearchbarSection>
    );
  }
}

Searchbar.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
