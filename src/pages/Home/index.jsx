import Pokemon from '../../components/Pokemon/index.jsx';
import PokemonLogo from "../../assets/images/pokemon_logo.png"
import styles from "./styles.module.css"

export const Home = () => {
  return (
    <div className = {styles.container}>
      <img className = {styles.image} src = {PokemonLogo} alt = "Pokemon Logo" />
      <Pokemon name = "Pikachu" />
      <Pokemon name = "Charmander" />
      <Pokemon name = "Squirtle" />
      <Pokemon name = "Psiduck" />
      <Pokemon name = "Bulbasours" />
      <Pokemon name =""/>
      <Pokemon />
    </div>
  );
}

