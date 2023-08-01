import SearchBar from "../../componentes_de_aplicación/Search_Bar/Search_Bar";
import FilterBar from "../../componentes_de_aplicación/Filter_Bar/Filter_Bar";
import Cards from "../../componentes_de_datos/cards/Cards";
import styles from "./Home_page.module.css";


function Home() {

  return (
    <div >
      <div className={styles.Container}>
      <FilterBar/>
      <SearchBar />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
