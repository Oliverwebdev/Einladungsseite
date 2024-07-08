import React from 'react';

function Highlight() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 100% der Höhe des sichtbaren Bereichs
    width: '100vw', // 100% der Breite des sichtbaren Bereichs
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundImageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  };

  const contentStyle = {
    position: 'absolute',
    zIndex: 1,
    color: 'white', // Farbe des Textes, damit er sichtbar bleibt
  };

  return (
    <div style={containerStyle}>
      <img src="/einladungsbild.jpeg" alt="Einladungsbild" style={backgroundImageStyle} />
      <div style={contentStyle}>
      </div>
    </div>
  );
}

export default Highlight;
