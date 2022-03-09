import axios from "axios";
import { GET_CONTRACTS, GET_AVERAGE_PRICE, SET_LOADING } from "../constants";

export const getData = (requestData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });

    const { data: stats } = await axios.get(
      "https://warm-river-64553.herokuapp.com/https://prosecankvadrat.herokuapp.com/web/v1/contracts/stats",
      { params: { municipality: requestData.municipality.id } }
    );

    const { data: contracts } = await axios.get(
      "https://warm-river-64553.herokuapp.com/https://prosecankvadrat.herokuapp.com/web/v1/contracts",
      {
        params: { perPage: 100, page: 0 },
      }
    );

    dispatch({ type: GET_CONTRACTS, payload: contracts.items });
    dispatch({ type: GET_AVERAGE_PRICE, payload: stats.averagePrice });

    dispatch({ type: SET_LOADING });
    navigate("/search-results");
  } catch (error) {
    console.error(error);
  }
};
