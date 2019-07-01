import React from 'react';

const DifficultyButton = ({ onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: 55,
      left: 15,
      fontSize: '15px',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: 4,
      borderRadius: 4,
      backgroundColor: '#AAAAFF',
      color: '#FFFFFF'
    }}
    onClick={onClick}
  >
    TOGGLE DIFFICULTY
  </div>
);

export default DifficultyButton;
