import React, {useState} from 'react';
import './style.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen &&
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Modal content</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;




