import styles from "./ContainerMap.module.css";

function ContainerMap({children}){
    return(
        <section className={styles.containerMap}>
            {children}
        </section>
    );
}

export default ContainerMap;
