import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Keyframes für die Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Global Styles um das Scrollen auf der X- und Y-Achse zu verhindern
const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

// Styled Component für den Container
const HighlightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${fadeIn} 2s ease-in-out;
  background-color: #000;

  @media (max-width: 390px) {
    height: auto;
  }
`;

// Styled Component für das Bild
const HighlightImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 390px) {
    border-radius: 0;
  }
`;

function Highlight() {
  return (
    <>
      <GlobalStyle />
      <HighlightContainer>
        <HighlightImage src="/einladungsbild.jpeg" alt="Einladungsbild" />
      </HighlightContainer>
    </>
  );
}

export default Highlight;
