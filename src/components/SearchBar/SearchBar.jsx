import { useState } from "react";
import searchLogo from "/search.svg";
import PropTypes from "prop-types";

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
          placeholder="Buscar personaje..."
          value={searchQuery}
          onChange={handleSearchChange} 
          className="search-input"
        />
        <button type="submit" className="searchButtom">
            <img src={searchLogo} alt="icono buscar"/>
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar;
