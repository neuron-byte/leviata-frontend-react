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
    // Adiciona um novo card com valores de latitude e longitude
    setCards([...cards, { 
      id: cardId, 
      content: `Card ${cardId}`,
      lat: "",  // Valor de latitude
      lon: ""   // Valor de longitude
    }]);
    setCardId(cardId + 1);
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id)); // Remove o card com o ID especificado
  }

  // Função para enviar as coordenadas
  function sendCoordinates() {
    const coordinates = cards.map(card => ({
      lat: card.lat,
      lon: card.lon
    }));
    
    const payload = { coordinates };
    console.log(payload); // Aqui você pode fazer a requisição para enviar os dados, por exemplo:
    fetch("http://localhost:8000/api/sendCoordinates", {
    method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(payload),
     });
  }

  return (
    <>
      <div>        
        <CardsSection>
          <ContainerCards>
            {cards.map((card) => (
              <Card 
                key={card.id} 
                id={card.id} 
                lat={card.lat}
                lon={card.lon}
                onRemove={removeCard}
                onChangeCoordinates={(lat, lon) => {
                  setCards(cards.map(c => c.id === card.id ? { ...c, lat, lon } : c));
                }}
              >
                {card.content}
              </Card>
            ))}
          </ContainerCards> 
          <button className={"actionBtn"} onClick={newCard}> Novas Coordenadas </button>
          <button className={"actionBtn"} onClick={sendCoordinates}> Enviar Coordenadas </button>
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
