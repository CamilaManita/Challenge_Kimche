import { useState } from "react";
import PropTypes from "prop-types";
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit} className="form">
        <input
          type="text"
          placeholder="Search character..."
          value={searchQuery}
          onChange={handleSearchChange} 
          className="input"
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar;
