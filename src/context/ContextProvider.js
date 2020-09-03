import React, { createContext, useReducer, useState } from "react";
import PokedexReducer from "./PokedexReducer";
import { SET_DATA, SET_LIST, SET_LOADING, CLEAR, SET_SELECTED } from "./Types";

//create context
export const PokedexContext = createContext();

//create Provider
export const PokedexProvider = (props) => {
  //initial states
  const initialState = {
    datas: [],
    pokemonList: [],
    loading: false,
    selectedPokemon: "",
  };

  //url setup
  let [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //initialize Reducer
  const [state, dispatch] = useReducer(PokedexReducer, initialState);

  //define functions
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setData = (data) => {
    dispatch({ type: SET_DATA, payload: data });
  };

  const setPokemonList = (list) => {
    dispatch({ type: SET_LIST, payload: list });
  };

  const setSelectedPokemon = (pokemon) => {
    dispatch({ type: SET_SELECTED, payload: pokemon });
  };

  const onButtonClick = (e) => {
    if (!e.target.value) return;

    dispatch({ type: CLEAR });
    setUrl(e.target.value);
  };
  const onNameClick = (e) => {
    setPokemonUrl("");
    let id = "";
    let idUrl = "";

    id = e.target.value;
    idUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    setPokemonUrl(idUrl);
  };

  //return Provider
  return (
    <PokedexContext.Provider
      value={{
        states: state,
        setLoading,
        url,
        setUrl,
        pokemonUrl,
        setPokemonUrl,
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        imageUrl,
        setImageUrl,
        setSelectedPokemon,

        setData,
        setPokemonList,
        onButtonClick,
        onNameClick,
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};
