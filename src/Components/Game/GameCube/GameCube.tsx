import React from 'react';

const GameCube: React.FC = () => {
  const randomColor = `#${`${Math.random().toString(16)}000000`.substring(2, 8).toUpperCase()}`;
  return (
    <div className="shadowItem" style={{ backgroundColor: randomColor }}>
      <div className="gameItem" />
    </div>
  );
};
export default GameCube;
