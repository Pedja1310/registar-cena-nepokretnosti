import { CREATE_POLYGON, REMOVE_POLYGON } from "../constants";

export const createPolygon = (payload) => (dispatch) => {
  dispatch({ type: CREATE_POLYGON, payload });
};

export const removePolygon = () => (dispatch) => {
  dispatch({ type: REMOVE_POLYGON });
};
