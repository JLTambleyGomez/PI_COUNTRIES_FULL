import {
  CLEAR_COUNTRIES,CLEAN_MESSAGE,ERROR,GET_CONTRIES,GET_CONTRIES_BY_NAME,GET_ACTIVITY,GET_CONTRIES_BY_ID,
  POST_ACTIVITY,FILTER_BY_CONTINENT,FILTER_BY_ACTIVITY,ORDER_BY_NAME_ASC,ORDER_BY_NAME_DESC,ORDER_BY_POPULATION_ASC,
  ORDER_BY_POPULATION_DESC,
 
} from "./actions";
let initialState = {
  countries: [],
  originalCountries: [], 
  activity: [],
  error: "",
  message: "",
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTRIES:
      return {
        ...state,
        countries: action.payload,
        originalCountries: [...action.payload], // para no compartir referencia
      };
    
    case GET_CONTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case GET_CONTRIES_BY_ID:
      return {
        ...state,
        countries: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        message: "Actividad Creada"
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        error: "",
        message:"",
      };
    case CLEAR_COUNTRIES:
      return {
        ...state,
        countries: [],
      };
      case FILTER_BY_CONTINENT:
        const filteredCountries = state.originalCountries.filter((country) => country.Continente === action.payload
        );
        return {
          ...state,
          countries: filteredCountries,
        };

        case FILTER_BY_ACTIVITY:
          const filteredCountriesByActivity = state.originalCountries.filter(country => {
            return country.Activities.some(activity => activity.Nombre  === action.payload);
          });
          return {
            ...state,
            countries: filteredCountriesByActivity,
          };
          case ORDER_BY_NAME_ASC:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) =>
          a.Nombre.localeCompare(b.Nombre)
        ),
      };

    case ORDER_BY_NAME_DESC:
      return {
        ...state,
        countries: [...state.countries].sort((a, b) =>
          b.Nombre.localeCompare(a.Nombre)
        ),
      };

    case ORDER_BY_POPULATION_ASC:
      return {
        ...state,
        countries: [...state.countries].sort(
          (a, b) => a.Poblacion - b.Poblacion
        ),
      };

    case ORDER_BY_POPULATION_DESC:
      return {
        ...state,
        countries: [...state.countries].sort(
          (a, b) => b.Poblacion - a.Poblacion
        ),
      };
        
   
    default:
      return state;
  }
}

export default rootReducer;
