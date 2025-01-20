// TransactionForm.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Para acceder al estado pasado por Link
import '../styles/TransactionForm.css';

const TransactionForm = () => {
  const { state } = useLocation(); // Obtiene el estado de la ubicación
  const media = state?.media; // Accede a los datos de la película desde el estado
  const [action, setAction] = useState('comprar');
  const [paymentMethod, setPaymentMethod] = useState('tarjeta');

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

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
                src={`https://www.youtube.com/embed/${media.trailer.split('v=')[1]}`} // Suponiendo que `media.trailer` contiene el URL completo
                title={`Tráiler de ${media.title}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </>
          ) : (
            <p>No se han proporcionado detalles sobre la película.</p>
          )}
        </div>

        {/* Formulario de transacción */}
        <form className="transaction-form">
          <h1>{action === 'comprar' ? 'Comprar' : 'Alquilar'} {media?.title}</h1>

          <label>
            <strong>Opción:</strong>
            <select value={action} onChange={handleActionChange}>
              <option value="comprar">Comprar</option>
              <option value="alquilar">Alquilar</option>
            </select>
          </label>

          <p><strong>Precio:</strong> {action === 'comprar' ? '$30' : '$10 por 5 días'}</p>

          <label>
            <strong>Nombre:</strong>
            <input type="text" placeholder="Tu nombre" required />
          </label>

          <label>
            <strong>Lugar de residencia:</strong>
            <input type="text" placeholder="Ciudad o dirección" required />
          </label>

          <label>
            <strong>Código postal:</strong>
            <input type="text" placeholder="Código postal" required />
          </label>

          <strong>Método de pago:</strong>
          <div className="payment-method">
            <label>
              <input
                type="radio"
                value="tarjeta"
                checked={paymentMethod === 'tarjeta'}
                onChange={handlePaymentMethodChange}
              />
              Tarjeta
            </label>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === 'tarjeta' && (
            <>
              <label>
                <strong>Número de tarjeta:</strong>
                <input type="text" placeholder="Número de tarjeta" required />
              </label>
              <label>
                <strong>Fecha de expiración:</strong>
                <input type="text" placeholder="MM/AA" required />
              </label>
              <label>
                <strong>CVC:</strong>
                <input type="text" placeholder="Código CVC" required />
              </label>
            </>
          )}

          {paymentMethod === 'paypal' && (
            <label>
              <strong>Correo de PayPal:</strong>
              <input type="email" placeholder="Correo asociado a PayPal" required />
            </label>
          )}

          <button type="submit" className="transaction-form__button">
            Confirmar {action === 'comprar' ? 'compra' : 'alquiler'}
          </button>
        </form>
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
