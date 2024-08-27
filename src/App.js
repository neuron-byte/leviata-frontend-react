import Button from "./components/Button";
import CardsSection from "./components/CardsSection";
import Card from "./components/Card";
import ContainerCards from "./components/ContainerCards";
import ContainerMap from "./components/ContainerMap";
import InformationContainer from "./components/InformationContainer";
import Map from "./components/Map";

import "leaflet/dist/leaflet.css";


function App() {
  return (
    <>
      <div>        
          <CardsSection>
            <ContainerCards>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ContainerCards>
            <Button 
              props={{text : "Enviar Coordenadas", }}
            />
            <Button 
              props={{text : "Novas Coordenadas", }}
            />
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
