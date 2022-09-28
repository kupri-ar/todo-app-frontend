import Modal from 'react-modal';
import {useState} from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm.container";

export const useAddTodoModal = (todoItem = null) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalComponent = (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <h2>{todoItem ? 'Edit To Do Item' : 'New To Do Item'}</h2>
          <button onClick={closeModal}>X</button>
        </div>

        <AddTodoForm todoItem={todoItem} />
      </div>
    </Modal>
  );

  return [ modalComponent, openModal ]
}