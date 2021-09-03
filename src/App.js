import React from 'react';
import './index.css';
import Game from './components/Game';
import { GameProvider } from './components/GameContext';

const App = () => {
  return (
    <div className="App">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
