import React from 'react';

const GameD = ({ value }) => {
  return <div className="gamed">{value}</div>;
};

const GameLine = ({ item }) => {
  return (
    <div className="gameline">
      {item.map((v, index) => {
        return <GameD key={'gd' + index} value={v} />;
      })}
    </div>
  );
};
export default GameLine;
