import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </div>
  );
}

export default App;
