import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MediaCard.css';

const MediaCard = ({ media }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate(`/purchase/${media.id}`, { state: { media } });
  };

  const handleRent = () => {
    navigate(`/rent/${media.id}`, { state: { media } });
  };

  // Importar la imagen de manera dinámica
  const imageSrc = require(`../assets/images/${media.title.toLowerCase().replace(/\s+/g, '-')}.jpg`);

  return (
    <div className="media-card">
      <img
        src={imageSrc}
        alt={media.title}
        className="media-card__image"
      />
      <h2>{media.title}</h2>
      <p><strong>Director:</strong> {media.director}</p>
      <p><strong>Año:</strong> {media.year}</p>
      <p><strong>Sinopsis:</strong> {media.synopsis}</p>
      <a href={media.trailer} target="_blank" rel="noopener noreferrer">
        Ver tráiler
      </a>
      <div className="media-card__actions">
        <button onClick={handlePurchase} className="media-card__button">Comprar</button>
        <button onClick={handleRent} className="media-card__button">Alquilar</button>
      </div>
    </div>
  );
};

export default MediaCard;
