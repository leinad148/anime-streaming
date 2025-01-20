import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


const Header = ({ searchQuery, handleSearchChange }) => {
  return (
    <header className="home-header">
      <div className="home-header__logo">
        <Link to="/">AniStream.net</Link>
      </div>
      <nav className="home-header__nav-links">
        <Link to="/" className="home-header__nav-button">Inicio</Link>
        <Link to="/catalog/series" className="home-header__nav-button">Series</Link>
        <Link to="/catalog/movies" className="home-header__nav-button">Películas</Link>
        <input
          type="text"
          className="home-header__search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar por nombre..."
        />
      </nav>
    </header>
  );
};

export default Header;
