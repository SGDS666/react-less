import React, { useState,useEffect } from 'react';
import GameLine from './GameLine';
import Contorl from './Contorl';
import './style.less';

export default function App() {
  const gamearr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [game, setgame] = useState(gamearr);
  const [fx, setfx] = useState('');
  useEffect(()=>{
    const changearr = (fx) => {
      switch (fx) {
        case '上':
            
            break;
        case '下':
          
            break
        case '左':
          
              break
        case '右':
          
              break
    
        default:
            break;
    }
    
  }
  },[fx])
  return (
    <div id="app">
      <div id="game">
        {game.map((item, index) => {
          return <GameLine key={'gl' + index} item={item} />;
        })}
      </div>
      <Contorl options={[setfx]} />
    </div>
  );
}
