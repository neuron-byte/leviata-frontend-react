import styles from "./ContainerCards.module.css";

function ContainerCards({children}){
    return(
        <div className={styles.containerCards}>
            {children}
        </div>
    );
}

export default ContainerCards;
