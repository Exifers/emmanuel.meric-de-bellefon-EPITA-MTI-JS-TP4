import React from 'react';

const colors = [
  '#FF6065',
  '#FF6965',
  '#FF7065',
  '#FF7965',
  '#FF8065',
  '#FF8965',
  '#FF9065',
  '#FF9965',
  '#FFA065',
  '#FFA965',
  '#FFB065',
  '#FFB965',
  '#FFC065',
  '#FFC965',
  '#FFD065',
];

const Target = ({ x = 0, y = 0, value = 0, colorValue = 0, onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: `${y}%`,
      left: `${x}%`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: colors[colorValue < colors.length ? colorValue : colors.length - 1]
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Target;
