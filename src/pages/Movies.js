import React from 'react';
import { movies } from '../data/movies';
import MediaCard from '../components/MediaCard';
import '../styles/Catalog.css';
import Footer from '../components/Footer';  // Importar el componente Footer

const Movies = () => {
  return (
    <div className="catalog-container">
      <h1>Catalogo de Películas</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
      {/* Usar el componente Footer */}
      <Footer />
    </div>
  );
};

export default Movies;