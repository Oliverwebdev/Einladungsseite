import React from 'react';
import styled, { keyframes } from 'styled-components';

const rocketLaunch = keyframes`
  0% {
    bottom: 0;
    opacity: 1;
  }
  70% {
    bottom: 70%;
    opacity: 1;
  }
  100% {
    bottom: 80%;
    opacity: 0;
  }
`;

const explode = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;

const particleExplosion = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y));
    opacity: 0;
  }
`;

const FireworkContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  position: relative;
`;

const FireworkWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Rocket = styled.div`
  width: 4px;
  height: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rocketLaunch} 1.5s ease-out forwards;
`;

const Explosion = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  animation: ${explode} 0.5s ease-out 1.5s forwards;
`;

const Particle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${particleExplosion} 1s ease-out 1.5s forwards;
  background-color: ${props => props.color};
  --x: ${props => props.x};
  --y: ${props => props.y};
`;

function Firework() {
  const particles = [
    { color: '#ff0000', x: '100px', y: '-100px' },
    { color: '#00ff00', x: '-100px', y: '100px' },
    { color: '#0000ff', x: '100px', y: '100px' },
    { color: '#ffff00', x: '-100px', y: '-100px' },
    { color: '#ff00ff', x: '70px', y: '-70px' },
    { color: '#00ffff', x: '-70px', y: '70px' },
    { color: '#ff8000', x: '70px', y: '70px' },
    { color: '#8000ff', x: '-70px', y: '-70px' },
  ];

  return (
    <FireworkContainer>
      <FireworkWrapper>
        <Rocket />
        <Explosion>
          {particles.map((particle, index) => (
            <Particle
              key={index}
              color={particle.color}
              x={particle.x}
              y={particle.y}
            />
          ))}
        </Explosion>
      </FireworkWrapper>
    </FireworkContainer>
  );
}

export default Firework;