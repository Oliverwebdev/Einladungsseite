import React from 'react';
import styled from 'styled-components';
import Firework from "./components/Firework";
import Form from "./components/Form";
import Highlight from "./components/Highlight";

// Styled component für den App Container
const FullScreenContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;  // Passen Sie bei Bedarf die Ausrichtung an
  justify-content: center; // Zentriert Inhalte vertikal
  align-items: center;     // Zentriert Inhalte horizontal
  background-color: #f0f0f0; // Hintergrundfarbe
  position: fixed; // Sorgt dafür, dass der Container immer den gesamten Bildschirm ausfüllt
  top: 0;
  left: 0;
  overflow: hidden; // Verhindert unerwünschtes Scrollen
`;

function App() {
  return (
    <FullScreenContainer>
      {/* Aktivieren Sie die folgenden Komponenten nach Bedarf */}
      <Highlight />
      {/* <Firework /> */}
      {/* <Form /> */}
    </FullScreenContainer>
  );
}

export default App;
