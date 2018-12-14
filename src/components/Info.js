import React from 'react';

const Info = ({ lives, score }) => (
  <div
    style={{
      position: 'fixed',
      padding: '10px 20px',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'right'
    }}
  >
    <div>{lives} ❤️</div>
    <div>{score} 🥇</div>
  </div>
);

export default Info;
