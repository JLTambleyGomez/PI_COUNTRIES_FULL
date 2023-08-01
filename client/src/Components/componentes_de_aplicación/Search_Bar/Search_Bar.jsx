import React, { useState } from "react";
import style from "./Search_Bar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { gET_CONTRIES_BY_NAME, clearMessage} from "../../../Redux/actions";

function SearchBar() {

  
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const error = useSelector((state) => state.error); 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(gET_CONTRIES_BY_NAME(searchTerm));
    setSearchTerm("");
    dispatch(clearMessage());

  };

  return (
    <div className={style.bar1}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Búsqueda"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

export default SearchBar;
