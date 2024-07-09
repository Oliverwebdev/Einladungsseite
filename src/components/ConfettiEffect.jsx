import React from 'react';
import { Fireworks } from '@fireworks-js/react';

function ConfettiEffect() {
  return (
    <div>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100
          },
          hue: {
            min: 0,
            max: 360
          },
          delay: {
            min: 30,  // Erhöhte Verzögerung zwischen den Explosionen
            max: 60
          },
          speed: 2,  // Reduzierte Geschwindigkeit
          acceleration: 1.03,
          friction: 0.97,
          gravity: 1.2,
          particles: 50,  // Reduzierte Partikelanzahl
          trace: 3,  // Reduzierte Verfolgungseffekt
          explosion: 5,  // Weniger intensive Explosion
          autoresize: true,
          brightness: {
            min: 40,  // Reduzierte Helligkeit
            max: 70,
            decay: {
              min: 0.02,
              max: 0.04
            }
          },
          boundaries: {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight
          },
          sound: {
            enable: false
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          pointerEvents: 'none',  // Dadurch wird verhindert, dass das Feuerwerk andere Interaktionen behindert
          zIndex: 1  // Das Feuerwerk wird hinter anderen Elementen angezeigt
        }}
      />
    </div>
  );
}

export default ConfettiEffect;
