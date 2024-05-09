import React from 'react';
import { TodoProvider } from './components/TodoContext';
import MainContent from './components/MainContent';
import Header from './components/Header';
import './App.css'
import Modal from './components/Modal';

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <div className="container">
          <Header />
          <MainContent />
          <Modal />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;