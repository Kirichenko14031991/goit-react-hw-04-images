import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { AppStyle } from './App.styled';
import servicePixabayAPI from './Services/Api';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryPage, setGalleryPage] = useState(1);
  const [hitsPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchGalleryItems = (nextQuery, nextPage, hitsPerPage) => {
      setLoading(true);

      servicePixabayAPI(nextQuery, nextPage, hitsPerPage)
        .then(data => {
          const { totalHits, hits } = data;

          if (!totalHits) {
            setLoading(false);
            setError(true);
            toast.warn(
              'Sorry, there are no images matching your search query. Please try again.'
            );
            return;
          }

          if (nextPage === 1 || totalHits <= hitsPerPage) {
            toast.success(`Hooray! We found ${totalHits} images.`);
          }

          const newData = hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => ({
              id,
              tags,
              webformatURL,
              largeImageURL,
            })
          );

          setGalleryItems(prevGalleryItems => [
            ...prevGalleryItems,
            ...newData,
          ]);
          setIsButtonShow(galleryPage < Math.ceil(totalHits / hitsPerPage));
        })
        .catch(error => {
          console.error(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
          setError(false);
        });
    };

    if (searchQuery) {
      fetchGalleryItems(searchQuery, galleryPage, hitsPerPage);
    }
  }, [searchQuery, galleryPage, hitsPerPage]);

  const handlerSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
    setGalleryPage(1);
    setGalleryItems([]);
    setIsButtonShow(false);
    setError(false);
  };

  const onLoadMore = () => {
    setGalleryPage(prevPage => prevPage + 1);
  };

  return (
    <AppStyle>
      <Searchbar formSubmitHandler={handlerSearchQuery}></Searchbar>

      {error && <h2>Please, enter search word!</h2>}
      {!error && <ImageGallery galleryItems={galleryItems} />}
      {loading && <Loader />}
      {isButtonShow && !loading && <Button onClick={onLoadMore} />}

      <ToastContainer autoClose={3000} theme="dark" />
    </AppStyle>
  );
};

export default App;
