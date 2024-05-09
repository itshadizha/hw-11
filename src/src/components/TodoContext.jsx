import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [isMainContentClicked, setIsMainContentClicked] = useState(false);

  const openModal = (todo) => {
    setIsModalOpen(true);
    setTodoToDelete(todo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTodoToDelete(null);
  };

  const deleteTodo = () => {
    if (todoToDelete) {
      setTodos([...todos.filter((todo) => todo.id !== todoToDelete.id)]);
      closeModal();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        isModalOpen,
        openModal,
        closeModal,
        todoToDelete,
        isMainContentClicked,
        setIsMainContentClicked,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);