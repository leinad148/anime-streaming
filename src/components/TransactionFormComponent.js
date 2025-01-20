import React, { useState } from 'react';
import '../styles/TransactionForm.css';
import ConfirmationModal from './ConfirmationModal'; // Importamos el modal

const TransactionFormComponent = ({ media, action, setAction }) => {
  const [paymentMethod, setPaymentMethod] = useState('tarjeta');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad de la modal

  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    paypalEmail: '',
  });

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Actualiza el estado del formulario cuando se cambia un campo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para manejar la validación del formulario
  const validateForm = (e) => {
    e.preventDefault();

    // Validaciones de los campos
    const name = formData.name.trim();
    const address = formData.address.trim();
    const postalCode = formData.postalCode.trim();

    if (!name || !address || !postalCode) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validación de tarjeta o PayPal
    if (paymentMethod === 'tarjeta') {
      const cardNumber = formData.cardNumber.trim();
      const expirationDate = formData.expirationDate.trim();
      const cvc = formData.cvc.trim();

      if (!/^(\d{4}[- ]){3}\d{4}$/.test(cardNumber)) {
        alert('Número de tarjeta inválido. El formato debe ser XXXX-XXXX-XXXX-XXXX.');
        return;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
        alert('Fecha de expiración inválida. El formato debe ser MM/AA.');
        return;
      }
      if (!/^\d{3}$/.test(cvc)) {
        alert('Código CVC inválido. Debe tener 3 dígitos.');
        return;
      }
    }

    if (paymentMethod === 'paypal') {
      const paypalEmail = formData.paypalEmail.trim();
      if (!/\S+@\S+\.\S+/.test(paypalEmail)) {
        alert('Correo de PayPal inválido. Por favor ingresa un correo electrónico válido.');
        return;
      }
    }

    // Si la validación es exitosa, mostrar el modal y limpiar el formulario
    setIsModalOpen(true);
    setFormData({
      name: '',
      address: '',
      postalCode: '',
      cardNumber: '',
      expirationDate: '',
      cvc: '',
      paypalEmail: '',
    });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

  return (
    <form className="transaction-form" onSubmit={validateForm}>
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
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Tu nombre"
          required
        />
      </label>

      <label>
        <strong>Lugar de residencia:</strong>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Ciudad o dirección"
          required
        />
      </label>

      <label>
        <strong>Código postal:</strong>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="Código postal"
          required
        />
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
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Número de tarjeta"
              required
              pattern="(\d{4}[- ]){3}\d{4}"
              title="Número de tarjeta inválido. El formato debe ser XXXX-XXXX-XXXX-XXXX."
            />
          </label>
          <label>
            <strong>Fecha de expiración:</strong>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              placeholder="MM/AA"
              required
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              title="Fecha de expiración inválida. El formato debe ser MM/AA."
            />
          </label>
          <label>
            <strong>CVC:</strong>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              placeholder="Código CVC"
              required
              pattern="\d{3}"
              title="Código CVC inválido. Debe tener 3 dígitos."
            />
          </label>
        </>
      )}

      {paymentMethod === 'paypal' && (
        <label>
          <strong>Correo de PayPal:</strong>
          <input
            type="email"
            name="paypalEmail"
            value={formData.paypalEmail}
            onChange={handleInputChange}
            placeholder="Correo asociado a PayPal"
            required
            title="Por favor ingresa un correo electrónico válido."
          />
        </label>
      )}

      <button type="submit" className="transaction-form__button">
        Confirmar {action === 'comprar' ? 'compra' : 'alquiler'}
      </button>

      {/* Modal de confirmación */}
      <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} />
    </form>
  );
};

export default TransactionFormComponent;
