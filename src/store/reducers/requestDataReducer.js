import { SET_DATES, SET_MUNICIPALITY } from "../constants";

const initialState = { municipality: {}, from: "", to: "" };

const requestDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUNICIPALITY:
      return { ...state, municipality: action.value };
    case SET_DATES:
      return { ...state, from: action.value.from, to: action.value.to };
    default:
      return state;
  }
};

export default requestDataReducer;
