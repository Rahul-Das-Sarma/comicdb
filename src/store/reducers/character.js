import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  loading: true,
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHARACTER_INFO_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.CHARACTER_INFO:
      return {
        ...state,
        loading: false,
        characterInfo: action.payload,
      };

    case actionTypes.CHARACTER_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CharacterReducer;
