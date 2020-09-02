import React, { useContext } from "react";
import { Button } from "reactstrap";
import { Row, Col } from "reactstrap";
import { PokedexContext } from "../context/ContextProvider";

const Pokemons = () => {
  const { states, onNameClick } = useContext(PokedexContext);

  return (
    <div>
      <Row className="mx-auto" xs="1" sm="2">
        {states.pokemonList.map((pokemon) => (
          <Col key={pokemon.id}>
            <Button
              className="bg-info border-info"
              value={pokemon.id}
              onClick={onNameClick}
            >
              {pokemon.id}. {pokemon.name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pokemons;
