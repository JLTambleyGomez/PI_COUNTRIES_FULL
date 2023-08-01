import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gET_CONTRIES,clearMessage, clearCountries,gET_CONTRIES_BY_ID } from "../../../Redux/actions";
import styles from "./Card.module.css";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1); 
  const [perPage] = useState(10);
  const datos = useSelector((state) => state.countries);
 
  const handleClick = (card) => {
    dispatch(gET_CONTRIES_BY_ID(card.Id));
    navigate(`/countries/${card.Id}`);
  };
  useEffect(() => {
    dispatch(gET_CONTRIES());

    return ()=>{                   // return ocupar para hacer algo en el desmontaje          
    dispatch(clearMessage()); // limpiar 
    dispatch(clearCountries()); // limpia al momento de cambiarr y volver

    }
    
  }, [dispatch]);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const pagedData =Array.isArray(datos)&&datos.slice(startIndex, endIndex);


 
  const handleNextPage = () => {
    setPage(page + 1); };
  const handlePrevPage = () => {
    setPage(page - 1); };
  const handleInitialpage = () => {
    setPage(1);}
    if (Array.isArray(pagedData) && pagedData.length < 1 && page !== 1) {
      setPage(1);
    }
    
    
    return (
      
      <div>
      <button onClick={handlePrevPage} disabled={page === 1}>
        Anterior
      </button>
      {page}
      <button onClick={handleNextPage} disabled={endIndex >= datos.length}>
        Siguiente
      </button>
      <button onClick={handleInitialpage}>
        Página Inicial
      </button>
      <div className={styles.cardContainer}>
         
      
        {Array.isArray(pagedData) && pagedData.map((card, index) => (
          <div key={index} className={styles.card} onClick={() => handleClick(card)}>
            <img src={card.Imagen_de_la_bandera} alt={card.Nombre} className={styles.cardImage} />
            <p className={styles.cardInfo}>{card.Continente}</p>
            <p className={styles.cardInfo}>{card.Nombre}</p>
          </div>
        ))}
       
    </div>
    </div>
  );
 

};

export default Card;
