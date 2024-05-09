import React from 'react';
import { useTodoContext } from './TodoContext';
import ReactDOM from 'react-dom';

const Modal = () => {
  const { isModalOpen, closeModal, deleteTodo, isMainContentClicked } = useTodoContext();

  const handleDelete = () => {
    deleteTodo();
  };

  const handleCancel = () => {
    closeModal();
  };

  const modalContent = (
    <div className="modal">
      <div className={`modal-content ${isMainContentClicked ? "darkModalTheme" : ""}`}>
        <h3>Вы уверены, что хотите удалить эту задачу?</h3>
        <div className="modal-buttons">
          <button className='okeyButton' onClick={handleDelete}>Да</button>
          <button className='noneButton' onClick={handleCancel}>Нет</button>
        </div>
      </div>
    </div>
  );

  return isModalOpen
    ? ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    : null;
};

export default Modal;