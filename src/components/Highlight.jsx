import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2c2f33;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HighlightText = styled.span`
  color: #7289da;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Button = styled.button`
  background: #7289da;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    background: #5b6eae;
  }
`;

const Highlight = () => {
  const [name, setName] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Number of Guests: ${numberOfGuests}`);
  };

  return (
    <FormContainer>
      <Title>Endlich 50! Die ultimative Sause des Jahres – und du bist dabei!</Title>
      <Content>
        Ja, genau, du hast richtig gelesen! <HighlightText>[Name des Geburtstagskindes]</HighlightText> wird endlich 50 Jahre alt! Und das ist nicht nur irgendein Grund zum Feiern – das ist DER Grund, die fetteste Party des Jahres zu schmeißen. Also wenn das kein Grund ist, die Korken knallen zu lassen, dann weiß ich auch nicht!
      </Content>
      <Content>
        Also, schnapp dir deine Tanzschuhe – wenn du überhaupt tanzen kannst – und mach dich bereit: Am <HighlightText>[Datum]</HighlightText> um <HighlightText>[Uhrzeit]</HighlightText> steigt die Mega-Sause in <HighlightText>[Ort]</HighlightText>. Da gibt's nicht nur irgendeine Musik, sondern fetzige Musik! Und das Essen? Lecker! Und natürlich jede Menge gute Laune, wenn du die mitbringst. Das volle Programm, meine Damen und Herren!
      </Content>
      <Content>
        Ich bin natürlich schon am Start – ist ja klar – und kann es kaum erwarten, dich auch dort zu sehen. Aber die große Frage ist: Wie viele Party-People bringst du mit? Weil, alleine feiern ist ja wie Urlaub ohne Sonne.
      </Content>
      <Content>
        Lass mich bitte bis zum <HighlightText>[Datum]</HighlightText> wissen, mit wie vielen Feierwütigen du auftauchst. Ich muss ja planen, nicht dass wir am Ende ohne Bier dastehen, ne?
      </Content>
      <Content>
        Ich freue mich schon riesig auf dieses unvergessliche Fest mit dir!
      </Content>
      <Content>
        Bis bald und lass uns die Party rocken! 🎉
      </Content>
     
    </FormContainer>
  );
};

export default Highlight;
