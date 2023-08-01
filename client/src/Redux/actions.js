import axios from "axios";
export const GET_CONTRIES = "GET_CONTRIES";
export const GET_CONTRIES_BY_NAME = "GET_CONTRIES_BY_NAME";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_CONTRIES_BY_ID = "GET_CONTRIES_BY_ID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const ERROR = "ERROR";
export const CLEAR_COUNTRIES = "CLEAR_COUNTRIES";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME_ASC = "ORDER_BY_NAME_ASC";
export const ORDER_BY_NAME_DESC = "ORDER_BY_NAME_DESC";
export const ORDER_BY_POPULATION_ASC = "ORDER_BY_POPULATION_ASC";
export const ORDER_BY_POPULATION_DESC = "ORDER_BY_POPULATION_DESC";


export function filterByContinent(continent) {
  return { type: FILTER_BY_CONTINENT, payload: continent };
}
export function filterByActivity(activity) {
  return { type: FILTER_BY_ACTIVITY, payload: activity };
}



export function gET_CONTRIES() {
  return async function (dispatch) {
    try {
      const response = await axios("/countries");
      return dispatch({
        type: "GET_CONTRIES",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.message,
      });
    }
  };
}
export function gET_ACTIVITY() {
  return async function (dispatch) {
    try {
      const response = await axios("/activities");
      return dispatch({
        type: "GET_ACTIVITY",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.message,
      });
    }
  };
}
export function gET_CONTRIES_BY_NAME(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`/countries/name?name=${name}`);
      return dispatch({
        type: GET_CONTRIES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.message,
      });
    }
  };
}
export function gET_CONTRIES_BY_ID(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`/countries/${id}`);
      return dispatch({
        type: "GET_CONTRIES_BY_ID",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.message,
      });
    }
  };
}

export function postActivity(activityData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/activities", activityData);
      return dispatch({
        type: "POST_ACTIVITY",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.message,
      });
    }
  };
}

export function clearMessage() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_MESSAGE",
    });
  };
}
export function clearCountries() {
  return {
    type: CLEAR_COUNTRIES,
  };
}


export function orderBynameAsc() {
  return { type: ORDER_BY_NAME_ASC };
}

export function orderBynameDesc() {
  return { type: ORDER_BY_NAME_DESC };
}

export function orderByPopulationAsc() {
  return { type: ORDER_BY_POPULATION_ASC };
}

export function orderByPopulationDesc() {
  return { type: ORDER_BY_POPULATION_DESC };
}
