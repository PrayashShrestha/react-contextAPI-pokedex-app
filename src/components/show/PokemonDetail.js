import React, { useContext, useEffect } from "react";
import { PokedexContext } from "../../context/ContextProvider";
import Pokemon from "./Pokemon";

const PokemonDetail = () => {
  const {
    pokemonUrl,
    states,
    setLoading,
    setSelectedPokemon,
    setImageUrl,
  } = useContext(PokedexContext);
  const { loading, selectedPokemon } = states;

  useEffect(() => {
    setLoading();
    const fetchPokemon = async () => {
      await fetch(pokemonUrl)
        .then((res) => res.json())
        .then((data) => {
          setSelectedPokemon(data);

          setImageUrl(data.sprites.other.dream_world.front_default);
        });
    };
    fetchPokemon();
  }, [pokemonUrl]);
  return (
    <div className="container-fluid mt-5 mb-5 mx-auto">
      {loading ? <p>Loading.......</p> : <Pokemon />}
    </div>
  );
};

export default PokemonDetail;
