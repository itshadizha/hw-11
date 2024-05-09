import React, { useEffect } from 'react';
import ToDo from './Todo';
import ToDoForm from './ToDoForm';
import { useTodoContext } from './TodoContext';

const MainContent = () => {
  const { todos, setTodos, isMainContentClicked } = useTodoContext();

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random(),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ]);
  };

  return (
    <div className={`MainContent ${isMainContentClicked ? 'darkblueBackground' : ''}`}>
      <h1 style={{ color: isMainContentClicked ? 'white' : 'darkblue' }}>TODO-LIST</h1>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};

export default MainContent;
