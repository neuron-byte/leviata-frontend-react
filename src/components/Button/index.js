import styles from "./Button.module.css";

function Button({props}){
    return(
        <>
            <button className={styles.botaoCoordenadas}>{`${props.text}`}</button>
        </>
    );
}

export default Button;
