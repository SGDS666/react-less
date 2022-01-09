import React from 'react';

const Contorl = ({ options: [setfx] }) => {
  const click = ({ target: { innerHTML } }) => {
    setfx(innerHTML);
  };
  return (
    <div id="contorl">
      <div onClick={click}>上</div>
      <div onClick={click}>下</div>
      <div onClick={click}>左</div>
      <div onClick={click}>右</div>
    </div>
  );
};

export default Contorl;
