import CardsSection from "./components/CardsSection";
import Card from "./components/Card";
import ContainerCards from "./components/ContainerCards";
import ContainerMap from "./components/ContainerMap";
import InformationContainer from "./components/InformationContainer";
import Map from "./components/Map";
import { useState } from "react";

import "leaflet/dist/leaflet.css";

function App() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState(1); // ID autoincrementado

  function newCard() {
    setCards([...cards, { id: cardId, content: `Card ${cardId}` }]);
    setCardId(cardId + 1);
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id)); // Remove o card com o ID especificado
  }

  return (
    <>
      <div>        
        <CardsSection>
          <ContainerCards>
            {cards.map((card) => (
              <Card key={card.id} id={card.id} onRemove={removeCard}>
                {card.content}
              </Card>
            ))}
          </ContainerCards> 
          <button className={"actionBtn"} onClick={newCard}> Novas Coordenadas </button>
          <button className={"actionBtn"}> Enviar Coordenadas </button>
        </CardsSection>

        <ContainerMap>
          <InformationContainer/>
          <Map />
        </ContainerMap>
      </div> 
    </>
  );
}

export default App;
