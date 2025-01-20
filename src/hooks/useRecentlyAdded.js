// useRecentlyAdded.js
import { useState, useEffect } from 'react';
import movies from '../data/movies';  // Importamos las películas
import series from '../data/series';  // Importamos las series

export const useRecentlyAdded = () => {
  const [recentlyAddedMovies, setRecentlyAddedMovies] = useState([]);
  const [recentlyAddedSeries, setRecentlyAddedSeries] = useState([]);

  // Simulamos la carga de datos después de un retraso
  useEffect(() => {
    const fetchRecentlyAdded = () => {
      const getRecentlyAdded = (items) => {
        return [...items]
          .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
          .slice(0, 5);
      };

      setRecentlyAddedMovies(getRecentlyAdded(movies));
      setRecentlyAddedSeries(getRecentlyAdded(series));
    };

    // Simulamos un retraso como si estuviera esperando datos de una API
    setTimeout(fetchRecentlyAdded, 500);  // Espera 1 segundo para simular el retraso
  }, []);

  return { recentlyAddedMovies, recentlyAddedSeries };
};
