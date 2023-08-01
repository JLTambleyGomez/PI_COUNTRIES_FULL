import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity,clearMessage } from "../../../Redux/actions";
import validate from "./validate";
import styles from "./Form.module.css";

const FormPage = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const msj = useSelector((state) => state.message);

  const [input, setInput] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: "",
    Temporada: "",
    Paises: [],
  });

  const [errors, setErrors] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: "",
    Temporada: "",
    Paises: [],
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch (clearMessage())

    if (name === "Paises") {
      setInput({
        ...input,
        [name]: value.split(","),
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { Nombre, Dificultad, Duracion, Temporada, Paises } = input;
    const validationErrors = validate(Nombre, Dificultad, Duracion, Temporada, Paises);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await dispatch(postActivity(input));
        setInput({
          Nombre: "",
          Dificultad: "",
          Duracion: "",
          Temporada: "",
          Paises: [],
        });
        setErrors({});
      } catch (error) {}
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:{" "}
          <input
          placeholder="Ejemplo: Cabalgata"
            name="Nombre"
            value={input.Nombre}
            onChange={handleInputChange}
          />
          {errors.Nombre && <span className={styles.error}>{errors.Nombre}</span>}
        </label>
        <hr></hr>
        <label>
          Dificultad:{" "}
          <input
          placeholder="Del 1 a 5"
            name="Dificultad"
            value={input.Dificultad}
            onChange={handleInputChange}
          />
          {errors.Dificultad && <span className={styles.error}>{errors.Dificultad}</span>}
        </label>
        <hr></hr>
        <label>
          Duracion (hrs):{" "}
          <input
            placeholder="Ejemplo : 2"

            name="Duracion"
            value={input.Duracion}
            onChange={handleInputChange}
          />
          {errors.Duracion && <span className={styles.error}>{errors.Duracion}</span>}
        </label>
        <hr></hr>
        <label>
          Temporada:{" "}
          <input
            name="Temporada"
            placeholder="Primavera,Verano,Otoño,Invierno"
            value={input.Temporada}
            onChange={handleInputChange}
          />
          {errors.Temporada && <span className={styles.error}>{errors.Temporada}</span>}
        </label>
        <hr></hr>
        <label>
          Paises:
          <input
            name="Paises"
            placeholder="Ejemplo: Argentina,Chile"

            value={input.Paises.join(",")}
            onChange={handleInputChange}
          />
          {errors.Paises && <span className={styles.error}>{errors.Paises}</span>}
        </label>
        <hr></hr>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {error && <span className={styles.error}>{error}</span>}
      {msj && <span className={styles.successMessage}>{msj}</span>}
    </div>
  );
};

export default FormPage;
