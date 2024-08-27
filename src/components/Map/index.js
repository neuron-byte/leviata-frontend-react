import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
// import infoImg from "../../assets/info.png";
// import wifiImg from "../../assets/icons8-wi-fi-90.png";
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
// import { useMap } from 'react-leaflet/hooks';
// import { Marker, Popup } from "react-leaflet";

function Map(){
    let position = [-6.80594, -35.0757];
    return(
        <>
            <MapContainer center={position} zoom={10} scrollWheelZoom={false} className={styles.MapContainer}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>    
        </>
    );
}

export default Map;
