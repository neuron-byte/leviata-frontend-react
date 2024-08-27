import styles from "./Card.module.css";
import imgBotaoEditar from "../../assets/lapis.png";

function Card({children}){
    return(
        <>
            <div className={styles.cardCoordenada}>
                <div className={styles.medidas} id="longitude">
                    <p className={styles.textoMedidas}>Longitude:</p>
                    <p className={styles.textoMedidas} id="valorLongitude">50.0</p>
                </div>
                <div className={styles.medidas} id="latitude">
                    <p className={styles.textoMedidas}>Latitude:</p>
                    <p className={styles.textoMedidas} id="valorLatitude">60.0</p>
                </div>
                <div className={styles.areaBotaoEditar}>
                    <button className={styles.botaoEditar} onclick="editarCoordenadas()">
                        <img className={styles.imgBotaoEditar} src={imgBotaoEditar} alt="Botão editar, imagem de lápis" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;
