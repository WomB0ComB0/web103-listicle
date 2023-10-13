import React, { useState, useEffect, Fragment } from 'react';
import './Movies.scss';
import Header from '../components/semantics/Header';
import Card from '../components/Card';
import Search from '../components/Search';
// import { useSorting } from '../hooks/useSorting';

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const { sortBy, sortOrder } = useSorting();

  const moviesPerPage = 20;

  useEffect(() => {
    setMovies(props.data);
  }, [props]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayedMovies = filteredMovies.slice(0, currentPage * moviesPerPage);

  // Function to sort movies based on criteria and order
  // const sortMovies = (criteria, order) => {
  //   let sortedMovies = [...filteredMovies];

  //   sortedMovies.sort((a, b) => {
  //     if (criteria === 'year') {
  //       return order === 'asc' ? a.year - b.year : b.year - a.year;
  //     } else if (criteria === 'rating') {
  //       return order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
  //     } else {
  //       return 0;
  //     }
  //   });

  //   setMovies(sortedMovies);
  // };

  // useEffect(() => {
  //   // Call the sorting function when props change
  //   sortMovies(sortBy, sortOrder);
  // }, [sortBy, sortOrder]);

  // Handle scroll
  const handleScroll = () => {
    const tolerance = 5; // pixels
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - tolerance) return;

    // If we're near the bottom of the page and there are more movies to show, update the current page
    if (currentPage * moviesPerPage < filteredMovies.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup - remove the listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, filteredMovies]);

  return (
    <>
      <Header />
      <section
        className='Movies grid'
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignContent: 'center',
          marginInline: 'auto',
        }}
      >
        <Search onSearchChange={setSearchValue} />
        {displayedMovies.length > 0 ? (
          displayedMovies.map((movie, index) => (
            <Fragment key={movie.id}>
              <Card
                imdb_id={movie.imdb_id}
                img={movie.img}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
              />
            </Fragment>
          ))
        ) : (
          <h3 className='noResults'>{'No Movies Yet 😞'}</h3>
        )}
      </section>
    </>
  );
};

export default Movies;
