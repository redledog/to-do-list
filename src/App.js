import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
