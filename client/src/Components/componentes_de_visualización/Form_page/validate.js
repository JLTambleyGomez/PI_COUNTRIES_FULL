const validate = (Nombre, Dificultad, Duracion, Temporada, Paises) => {
  let errors = {};

  if (!Nombre) {
    errors.Nombre = "El nombre es obligatorio";
  } else if (/\d/.test(Nombre)) {
    errors.Nombre = "El nombre no puede contener números";
  }

  if (!Dificultad) {
    errors.Dificultad = "La dificultad es obligatoria";
  } else if (isNaN(Dificultad)) {
    errors.Dificultad = "La dificultad debe ser un número";
  } else if (Dificultad < 1 || Dificultad > 5) {
    errors.Dificultad = "La dificultad debe estar entre 1 y 5";
  }

  if (!Duracion) {
    errors.Duracion = "La duración es obligatoria";
  } else if (isNaN(Duracion)) {
    errors.Duracion = "La duración debe ser un número";
  } else if (Duracion <= 0) {
    errors.Duracion = "La duración debe ser mayor que 0";
  }

  if (!Temporada) {
    errors.Temporada = "La temporada es obligatoria";
  } else if (!/^[A-Z]/.test(Temporada)) {
    errors.Temporada = "La temporada debe comenzar con mayúscula";
  
  } else if (!["Verano", "Otoño", "Invierno", "Primavera"].includes(Temporada)) {
    errors.Temporada = "La temporada no es válida, verifica Mayusculas Ejemplo Primavera";
  }

  if (!Paises || Paises.length === 0) {
    errors.Paises = "Debes seleccionar al menos un país";
  }

  return errors;
};

export default validate;
