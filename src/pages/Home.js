import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Header from '../components/Header';
import RecentlyAddedWidget from '../components/RecentlyAddedWidget';
import Footer from '../components/Footer';
import { useRecentlyAdded } from '../hooks/useRecentlyAdded';  // Nuestro custom hook

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Usamos el custom hook para obtener las películas y series recientemente añadidas
  const { recentlyAddedMovies, recentlyAddedSeries } = useRecentlyAdded();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleSeriesClick = (seriesId) => {
    navigate(`/series/${seriesId}`);
  };

  return (
    <div className="home-container">
      {/* Usar el componente Header */}
      <Header searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

      {/* Contenido principal */}
      <div className="main-content">
        {/* Usar el componente RecentlyAddedWidget */}
        <RecentlyAddedWidget
          recentlyAddedMovies={recentlyAddedMovies}
          recentlyAddedSeries={recentlyAddedSeries}
          onMovieClick={handleMovieClick}
          onSeriesClick={handleSeriesClick}
        />

        {/* Texto principal */}
        <div className="welcome-content">
          <h1 className="welcome-content__title">¡Bienvenido a AniStreaming!</h1>
          <p className="welcome-content__description">La mejor plataforma para ver anime online.</p>
        </div>
      </div>

      {/* Usar el componente Footer */}
      <Footer />
    </div>
  );
};

export default Home;
