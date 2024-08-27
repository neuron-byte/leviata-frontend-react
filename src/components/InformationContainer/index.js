import styles from "./InformationContainer.module.css";
import closeImg from "../../assets/fechar.png";

function InformationContainer(){
    return(
        <>
            <div className={styles.informacoes}>
                <div className={styles.divFechar}>
                    <button className={styles.fechar}>
                        <img src={closeImg} alt="" onclick="fecharInformacoes()" />
                    </button>
                </div>
                
                <h1 className={styles.tituloInfo}>Informações</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit aperiam natus at doloremque quibusdam. Aspernatur, rerum, quis aliquid ipsam odit nemo perspiciatis quas voluptas eaque eius odio repudiandae hic!</p>
            </div>
        </>
    );
}

export default InformationContainer;
