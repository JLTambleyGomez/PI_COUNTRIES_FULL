import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterByContinent,filterByActivity,gET_ACTIVITY,gET_CONTRIES,orderBynameAsc,orderBynameDesc,orderByPopulationAsc,orderByPopulationDesc,
} from "../../../Redux/actions";
import style from "./Filter_Bar.module.css";

function FilterBar() {

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activity);




  useEffect(() => {
    dispatch(gET_ACTIVITY());
    
  }, []);

  const handleContinentChange = (event) => {
    if (event.target.value === "") dispatch(gET_CONTRIES());
    else dispatch(filterByContinent(event.target.value));
  };

  const handleActivityChange = (event) => {
    if (event.target.value === "") dispatch(gET_CONTRIES());
    else dispatch(filterByActivity(event.target.value));
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;

    switch (sortValue) {
      case "nameAsc":
        dispatch(orderBynameAsc());
        break;
      case "nameDesc":
        dispatch(orderBynameDesc());
        break;
      case "populationAsc":
        dispatch(orderByPopulationAsc());
        break;
      case "populationDesc":
        dispatch(orderByPopulationDesc());
        break;
      default:
        break;
    }
  };

  const uniqueActivities = Array.from(new Set(activities.map((activity) => activity.Nombre)));

  return (
    <div className={style.bar1}>
      <p>Selecciona Continente</p>
      <select onChange={handleContinentChange}>
        <option value="">Todos los continentes</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
      </select>

      <p>Selecciona Actividad</p>
      <select onChange={handleActivityChange}>
        <option value="">Todas las actividades</option>
        {uniqueActivities.map((activity) => (
          <option key={activity} value={activity}>
            {activity}
          </option>
        ))}
      </select>

      <p>Ordenar por</p>
      <select onChange={handleSortChange}>
        <option value="">Ordenar</option>
        <option value="nameAsc">Nombre Ascendente</option>
        <option value="nameDesc">Nombre Descendente</option>
        <option value="populationAsc">Población Ascendente</option>
        <option value="populationDesc">Población Descendente</option>
      </select>
    </div>  
  );
}

export default FilterBar;
