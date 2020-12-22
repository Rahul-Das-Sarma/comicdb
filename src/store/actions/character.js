import marvelApi from "../../axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const characterInfo = (nameID) => async (dispatch) => {
  dispatch({ type: actionTypes.CHARACTER_INFO_LOADING });
  await marvelApi.get("/characters", {
      params: {
        name: nameID,
      },
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: actionTypes.CHARACTER_INFO, payload: data });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.CHARACTER_INFO_ERROR, payload: err })
    );
};
