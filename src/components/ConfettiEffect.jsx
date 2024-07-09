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
            min: 15,
            max: 30
          },
          speed: 3,
          acceleration: 1.05,
          friction: 0.98,
          gravity: 1.2,
          particles: 100,
          trace: 5,
          explosion: 10,
          autoresize: true,
          brightness: {
            min: 50,
            max: 80,
            decay: {
              min: 0.015,
              max: 0.03
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
          zIndex: 9999
        }}
      />
    </div>
  );
}

export default ConfettiEffect;
