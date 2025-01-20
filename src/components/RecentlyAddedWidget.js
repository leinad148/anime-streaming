// RecentlyAddedWidget.js
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
      <h3>Series Recientemente Añadidas</h3>
      <ul>
        {recentlyAddedSeries.map((series) => (
          <li key={series.id}>
            {/* Usamos un span o p para que no se vea como enlace */}
            <span onClick={() => handleMediaClick(series)}>{series.title}</span>
          </li>
        ))}
      </ul>
      <h3>Películas Recientemente Añadidas</h3>
      <ul>
        {recentlyAddedMovies.map((movie) => (
          <li key={movie.id}>
            {/* Usamos un span o p para que no se vea como enlace */}
            <span onClick={() => handleMediaClick(movie)}>{movie.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RecentlyAddedWidget;
