// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Header = ({ searchQuery, handleSearchChange }) => {
  return (
    <header className="home-header">
      <div className="logo">
        <Link to="/">AniStream.net</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-button">Inicio</Link>
        <Link to="/catalog/series" className="nav-button">Series</Link>
        <Link to="/catalog/movies" className="nav-button">Películas</Link>
        <input
          type="text"
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar por nombre..."
        />
      </nav>
    </header>
  );
};

export default Header;
