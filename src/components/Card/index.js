import { useState } from "react";
import styles from "./Card.module.css";
import trashIcon from "../../assets/trash.png";


function Card({ id, onRemove }) {
  const [latitude, setLatitude] = useState("0.0");
  const [longitude, setLongitude] = useState("0.0");

  return (
    <>
      <div className={styles.cardCoordenada}>
        <div className={styles.medidas} id="longitude">
          <p className={styles.textoMedidas}>Longitude:</p>
          <input
            type="text"
            className={styles.inputMedidas}
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className={styles.medidas} id="latitude">
          <p className={styles.textoMedidas}>Latitude:</p>
          <input
            type="text"
            className={styles.inputMedidas}
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className={styles.areaBotaoEditar}>
          <button className={styles.botaoEditar} onClick={() => onRemove(id)}>
            <img
              className={styles.trashIcon}
              src={trashIcon}
              alt="Botão editar, imagem de lápis"
            />
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Card;
