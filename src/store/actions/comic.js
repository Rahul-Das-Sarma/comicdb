import marvelApi from "../../axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const DeadpoolComic = () => async (dispatch) => {
  dispatch({ type: actionTypes.DEADPOOL_COMIC_LOADING });

  await marvelApi
    .get("/comics", {
      params: {
        title: "deadpool",
        limit: 6,
      },
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: actionTypes.DEADPOOL_COMIC,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.DEADPOOL_COMIC_ERROR,
        payload: err,
      });
    });
};

export const individualComic = (comicId) => async (dispatch) => {
  dispatch({ type: actionTypes.INDIVIDUAL_COMIC_LOADING });

  await marvelApi
    .get(`/comics/${comicId}`)
    .then((data) => {
      console.log(data);
      dispatch({ type: actionTypes.INDIVIDUAL_COMIC, payload: data });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.INDIVIDUAL_COMIC_ERROR, payload: error });
    });
};
