import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input type="text" placeholder="search" className="search__input" />
    </div>
  );
};

export default Search;
