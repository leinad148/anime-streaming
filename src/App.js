import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar las páginas y el Header
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import TransactionForm from './pages/TransactionForm';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header que estará disponible en todas las páginas */}
        <header className="home-header">
          <div className="home-header__logo">
            <a href="/">AniStream.net</a>
          </div>
          <nav className="home-header__nav-links">
            <a href="/" className="home-header__nav-button">Inicio</a>
            <a href="/catalog/series" className="home-header__nav-button">Series</a>
            <a href="/catalog/movies" className="home-header__nav-button">Películas</a>
            <input
              type="text"
              className="home-header__search-bar"
              placeholder="Buscar por nombre..."
            />
          </nav>
        </header>

        {/* Rutas de las páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/series" element={<Series />} />
          <Route path="/catalog/movies" element={<Movies />} />
          {/* Nuevas rutas para compra y alquiler */}
          <Route path="/purchase/:id" element={<TransactionForm />} />
          <Route path="/rent/:id" element={<TransactionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
