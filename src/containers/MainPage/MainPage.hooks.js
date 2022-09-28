import Modal from 'react-modal';
import {useState} from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm.container";

export const useAddTodoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  const openModal = (todoItem = null) => {
    setIsOpen(true);
    setCurrentItem(todoItem);
  };
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
          <h2 className='font-semibold mb-3'>{currentItem ? 'Edit To Do Item' : 'New To Do Item'}</h2>
          <button onClick={closeModal}>X</button>
        </div>

        <AddTodoForm todoItem={currentItem} close={() => setIsOpen(false)} />
      </div>
    </Modal>
  );

  return [ modalComponent, openModal ]
}