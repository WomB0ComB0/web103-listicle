import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

const Search = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  const handleSearchBlur = () => {
    setSearchParams({}, { replace: true });
    onSearchChange('');
  };

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    setSearchParams({ q: newValue }, { replace: true });
    onSearchChange(newValue);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit} className=''>
      <input
        type="search"
        id="search-bar"
        value={searchValue}
        onChange={handleSearchChange}
        onBlur={handleSearchBlur}
        autoComplete='off'
        placeholder="Search for a movie"
      />
    </form>
  )
}

export default Search;
