import React from 'react';
import { series } from '../data/series';
import MediaCard from '../components/MediaCard';
import '../styles/Catalog.css';
import Footer from '../components/Footer';  // Importar el componente Footer

const Series = () => {
  return (
    <div className="catalog-container">
      <h1>Catalogo de Series</h1>
      <div className="movie-list">
        {series.map((serie) => (
          <MediaCard key={serie.id} media={serie} />
        ))}
      </div>
      {/* Usar el componente Footer */}
      <Footer />
    </div>
  );
};

export default Series;