import React, { useState } from 'react';
import './style.less';

export default function App() {
  const gamearr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [game, setgame] = useState(gamearr);
  return (
    <div id="app">
      <div id="game">
        {game.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}
