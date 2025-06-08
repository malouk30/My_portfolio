import React from 'react';
import '../styles/PeekingBear.css';

const PeekingBear = () => {
  return (
    <div className="peeking-bear">
      <div className="bear">
        <div className="bear-face">
          <div className="ears">
            <div className="ear left"></div>
            <div className="ear right"></div>
          </div>
          <div className="face">
            <div className="eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeekingBear;
