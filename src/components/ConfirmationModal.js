import React from 'react';
import '../styles/ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal__title">Compra Confirmada</h2>
        <p className="modal__message">Tu compra ha sido confirmada exitosamente.</p>
        <button onClick={onClose} className="modal__close-btn">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
