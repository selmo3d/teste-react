import styles from "./styles.module.css";

const Pokemon = ({name = "padrao default"}) => {  
    return (
        <h2 className = {styles.name}>
            {name}
        </h2> 
    )
}

export default Pokemon;