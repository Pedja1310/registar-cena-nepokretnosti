import { SET_DATES, SET_MUNICIPALITY, CLEAR_REQUEST_DATA } from "../constants";

const initialState = { municipality: {}, from: "", to: "" };

const requestDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUNICIPALITY:
      return { ...state, municipality: action.value };
    case SET_DATES:
      return { ...state, from: action.value.from, to: action.value.to };
    case CLEAR_REQUEST_DATA:
      return initialState;
    default:
      return state;
  }
};

export default requestDataReducer;
