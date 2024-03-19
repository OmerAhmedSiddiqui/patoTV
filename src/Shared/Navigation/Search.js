import React, { useState } from 'react';
import './Search.scss'; // Import your CSS file for styling

import { ReactComponent as SearchIcon } from '../../Assets/Images/search.svg';
import { ReactComponent as SearchIconOpen } from '../../Assets/Images/search-open.svg';
import SearchOverlay from '../Components/SearchDropDown/SearchOverlay';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  const [searchClassName, setIsSearchClassName] = useState('SearchOverlay');

  const searchInput = (param) => {
    console.log(param);
    setIsSearchClassName( ' SearchOverlay active')
  };
  const handleChange = (e) => {
    
    if(e.target.value != ''){
      setIsSearchClassName( ' SearchOverlay active')
    }
    else if(e.target.value == ''){
      setIsSearchClassName('SearchOverlay ')
    }
  };
  
  return (
    <div className={`search-container ${isOpen ? 'open' : ''}`}>
      <div className="search-icon" onClick={toggleSearch}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-search'}`}></i>
        {isOpen ? <SearchIconOpen/> :<SearchIcon/>}
      </div>
      {isOpen && (
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onKeyUp={handleChange}
          />
          {/* You can add a search button or additional functionality here */}
        </div>
      )}
      <div className={searchClassName}>
        <SearchOverlay/>
      </div>

    </div>
  );
};

export default SearchBar;
