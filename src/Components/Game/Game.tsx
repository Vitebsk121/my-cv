import './Game.scss';

import React from 'react';

import GameCube from './GameCube/GameCube';

const Game: React.FC = () => {
  const countOfBlocks = [];
  const gameLength = 1225;

  for (let i = 1; i <= gameLength; i++) {
    countOfBlocks.push(i);
  }

  return (
    <div className="game">
      {countOfBlocks.map((item) => (
        <GameCube key={item} />
      ))}
    </div>
  );
};

export default Game;
