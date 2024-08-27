import styles from "./CardsSection.module.css";

function CardsSection({children}){
    return(
        <div className={styles.secaoCoordenadas}>
            {children}
        </div>
    );
}

export default CardsSection;
