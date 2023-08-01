import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearMessage, clearCountries } from "../../../Redux/actions";
import styles from "./Detail_page.module.css";

const DetailPage = () => {
  const country = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
      dispatch(clearCountries());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{country.Nombre}</h1>
        <img className={styles.flag} src={country.Imagen_de_la_bandera} alt={country.Nombre} />
      </div>
      <div className={styles.details}>
        <p>
          <span className={styles.label}>ID:</span> {country.Id}
        </p>
        <p>
          <span className={styles.label}>Continente:</span> {country.Continente}
        </p>
        <p>
          <span className={styles.label}>Capital:</span> {country.Capital}
        </p>
        <p>
          <span className={styles.label}>Subregión:</span> {country.Subregion}
        </p>
        <p>
          <span className={styles.label}>Área:</span> {country.Area}
        </p>
        <p>
          <span className={styles.label}>Población:</span> {country.Poblacion}
        </p>
        {country.Activities && country.Activities.length > 0 && (
          <div>
            <p className={styles.activitiesHeading}>Activities:</p>
            {country.Activities.map((activity) => (<p className={styles.activity} 
            key={activity.Nombre}>{activity.Nombre}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;