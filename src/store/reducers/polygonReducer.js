import { CREATE_POLYGON, REMOVE_POLYGON } from "../constants";

const initialState = { polygon: [] };

const polygonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POLYGON:
      return {
        ...state,
        polygon: [...action.payload],
      };
    case REMOVE_POLYGON:
      return {
        ...state,
        polygon: [],
      };
    default:
      return state;
  }
};

export default polygonReducer;
