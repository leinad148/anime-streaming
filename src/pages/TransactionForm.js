import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TransactionForm.css';
import TransactionFormComponent from '../components/TransactionFormComponent';

const TransactionForm = () => {
  const { state } = useLocation();
  const media = state?.media;
  const [action, setAction] = useState('comprar');

  return (
    <div className="transaction-form-container">
      <div className="transaction-content">
        {/* Información de la película */}
        <div className="media-info">
          {media ? (
            <>
              <h1>{media.title}</h1>
              <p><strong>Director:</strong> {media.director}</p>
              <p><strong>Año:</strong> {media.year}</p>
              <p><strong>Sinopsis:</strong> {media.synopsis}</p>
              <iframe
                src={`https://www.youtube.com/embed/${media.trailer.split('v=')[1]}`}
                title={`Tráiler de ${media.title}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </>
          ) : (
            <p>No se han proporcionado detalles sobre la película.</p>
          )}
        </div>

        {/* Renderizar el componente TransactionFormComponent */}
        <TransactionFormComponent media={media} action={action} setAction={setAction} />
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <p>Actividad 1 Desarrollo Web Integral</p>
          <p>Creado: Daniel de Jesus Aguirre Sosa</p>
          <p>Año: 2025</p>
          <p>Corporación - © UNIR - Universidad Internacional de La Rioja 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default TransactionForm;
