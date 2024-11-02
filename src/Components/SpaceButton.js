import React from 'react';
import './SpaceButton.css'; 

const SpaceButton = () => {
  return (
    <button type="button" className="btn">
      <strong>REGISTER</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default SpaceButton;
