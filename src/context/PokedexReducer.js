import { SET_DATA, SET_LIST, SET_LOADING, CLEAR, SET_SELECTED } from "./Types";

export default (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        datas: action.payload,
      };
    case SET_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR:
      return {
        ...state,
        datas: [],
        pokemonList: [],
      };
    case SET_SELECTED:
      return {
        ...state,
        selectedPokemon: "",
        selectedPokemon: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
