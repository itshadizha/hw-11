import React from 'react';
import { useTodoContext } from './TodoContext';

function ToDo({ todo, toggleTask }) {
  const { isMainContentClicked, openModal } = useTodoContext();

  const handleDeleteClick = () => {
    openModal(todo);
  };

  return (
    <div
      key={todo.id}
      className={`item-todo ${isMainContentClicked ? "darkBackground" : ""}`}
    >
      <div className={todo.complete ? "item-text strike" : "item-text"}>
        {todo.task}
      </div>
      <div>
        <input type="checkbox" onClick={() => toggleTask(todo.id)} />
        <button className="item-delete" onClick={handleDeleteClick}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ToDo;