import React from 'react';
import Board from './Components/Board';
import Game from './Components/Game';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Game/>
    </div>
  );
}

export default App;