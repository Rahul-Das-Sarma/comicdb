import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  loading: true,
};

const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEADPOOL_COMIC_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.DEADPOOL_COMIC:
      return {
        ...state,
        loading: false,
        deadpoolComic: action.payload,
      };

    case actionTypes.DEADPOOL_COMIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case actionTypes.INDIVIDUAL_COMIC_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.INDIVIDUAL_COMIC:
      return {
        ...state,
        loading: false,
        selectedComic: action.payload
      }  
    case actionTypes.INDIVIDUAL_COMIC_ERROR:
      return {
        ...state,
        loading : false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default comicReducer;
