import axios from 'axios';
import PropTypes from 'prop-types';

export default async function servicePixabayAPI(
  searchQuery,
  page,
  hitsPerPage = 12
) {
  const API_KEY = '38430435-7ecdf3387c91dd38e6d749add';

  const config = {
    method: 'get',
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: API_KEY,
      q: searchQuery,
      page: page,
      per_page: hitsPerPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  const response = await axios.get('', config);
  return response.data;
}

servicePixabayAPI.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  hitsPerPage: PropTypes.number,
};
