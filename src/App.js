import React, { useContext, useEffect } from "react";
import PokemonList from "./components/list/PokemonList";
import Header from "./layouts/Header";
import { PokedexContext } from "./context/ContextProvider";
import PokemonDetail from "./components/show/PokemonDetail";
import { Row, Col } from "reactstrap";
const App = () => {
  const {
    states,
    url,
    setLoading,
    setData,
    setNextUrl,
    setPrevUrl,
    pokemonUrl,

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
      <Row sm="2">
        <Col sm="6"> {pokemonUrl ? <PokemonDetail /> : <></>}</Col>
        <Col sm="6">{loading ? <p>Loading....</p> : <PokemonList />}</Col>
      </Row>
    </div>
  );
};

export default App;
