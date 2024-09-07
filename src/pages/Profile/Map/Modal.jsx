// Modal.js
import React from 'react';
import './Modal.css'; // Create a CSS file for styling

const Modal = ({ show, onClose, children}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modals">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
