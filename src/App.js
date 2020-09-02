import React, { useContext, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Header from "./layouts/Header";
import { PokedexContext } from "./context/ContextProvider";
const App = () => {
  const {
    states,
    url,
    setLoading,
    setData,
    setNextUrl,
    setPrevUrl,

    setPokemonList,
  } = useContext(PokedexContext);
  const { loading } = states;
  //fetching data
  useEffect(() => {
    setLoading();

    const fetching = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          let { previous, next } = data;
          setPrevUrl(previous);
          setNextUrl(next);
          let { results } = data;
          let arr = [];
          //looping through
          {
            results.map((result) => {
              let { name, url } = result;
              let urlArray = url.split("/");
              let id = urlArray[urlArray.length - 2];
              name = name.toUpperCase();
              arr.push({ id, name });
            });
            console.log(arr);
            setPokemonList(arr);
          }
        });
    };
    fetching();
  }, [url]);
  return (
    <div>
      <Header />
      {loading ? <p>Loading....</p> : <PokemonList />}
    </div>
  );
};

export default App;
