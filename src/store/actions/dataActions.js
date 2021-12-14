import refetchDataByDate from "../../api";
import { GET_DATA } from "../constants";

export const getData = (payload) => async (dispatch) => {
  try {
    const res = await refetchDataByDate(payload);

    dispatch({ type: GET_DATA, payload: res.data.d });
  } catch (error) {
    console.error(error);
  }
};
