import React from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de Link

const RecentlyAddedWidget = ({ recentlyAddedMovies, recentlyAddedSeries }) => {
  const navigate = useNavigate();

  const handleMediaClick = (media) => {
    // Lógica para redirigir a la página de compra o alquiler
    navigate(`/purchase/${media.id}`, { state: { media } });
  };

  return (
    <aside className="recently-added-widget">
      <h3 className="recently-added-widget__title">Series Recientemente Añadidas</h3>
      <ul className="recently-added-widget__list">
        {recentlyAddedSeries.map((series) => (
          <li key={series.id} className="recently-added-widget__list-item">
            {/* Usamos un span o p para que no se vea como enlace */}
            <span className="recently-added-widget__link" onClick={() => handleMediaClick(series)}>{series.title}</span>
          </li>
        ))}
      </ul>
      <h3 className="recently-added-widget__title">Películas Recientemente Añadidas</h3>
      <ul className="recently-added-widget__list">
        {recentlyAddedMovies.map((movie) => (
          <li key={movie.id} className="recently-added-widget__list-item">
            {/* Usamos un span o p para que no se vea como enlace */}
            <span className="recently-added-widget__link" onClick={() => handleMediaClick(movie)}>{movie.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RecentlyAddedWidget;
