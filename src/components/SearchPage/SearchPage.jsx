import { useState } from "react";
import searchLogo from "/search.svg";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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

export default SearchPage;
