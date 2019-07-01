import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
    <div
        style={{
            position: 'absolute',
            top: 15,
            left: 15,
            fontSize: '15px',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: 4,
            borderRadius: 4,
            backgroundColor: '#FF9999',
            color: '#FFFFFF'
        }}
        onClick={onClick}
    >
        QUIT
    </div>
);

export default ButtonStop;
