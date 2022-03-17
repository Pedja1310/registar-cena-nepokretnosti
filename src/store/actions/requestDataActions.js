import { SET_MUNICIPALITY, SET_DATES, CLEAR_REQUEST_DATA } from "../constants";

export const setMunicipalityAction = (municipality) => (dispatch) => {
  dispatch({ type: SET_MUNICIPALITY, value: municipality });
};

export const setStartAndEndDateAction = (dates) => (dispatch) => {
  dispatch({ type: SET_DATES, value: dates });
};

export const clearRequestDataAction = () => (dispatch) => {
  dispatch({ type: CLEAR_REQUEST_DATA });
};
