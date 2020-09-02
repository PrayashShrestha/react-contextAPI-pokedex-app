import React, { createContext, useReducer, useState, useEffect } from "react";
import PokedexReducer from "./PokedexReducer";
import { SET_DATA, SET_LIST, SET_LOADING, CLEAR } from "./Types";

//create context
export const PokedexContext = createContext();

//create Provider
export const PokedexProvider = (props) => {
  //initial states
  const initialState = {
    datas: [],
    pokemonList: [],
    loading: false,
  };

  //url setup
  let [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  let [pokemonUrl, setPokemonUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

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

  const onButtonClick = (e) => {
    if (!e.target.value) return;

    dispatch({ type: CLEAR });
    setUrl(e.target.value);
  };
  const onNameClick = (e) => {
    let id = e.target.value;
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(pokemonUrl);
  };

  //return Provider
  return (
    <PokedexContext.Provider
      value={{
        states: state,
        setLoading,
        url,
        setUrl,
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,

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
