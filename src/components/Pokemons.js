import React, { useContext } from "react";
import { Button } from "reactstrap";
import { Row, Col } from "reactstrap";
import { PokedexContext } from "../context/ContextProvider";

const Pokemons = () => {
  const { states } = useContext(PokedexContext);

  return (
    <div>
      <Row className="mx-auto" xs="1" sm="2">
        {states.pokemonList.map((pokemon) => (
          <Col>
            <Button key="id" className="bg-info border-info">
              {pokemon.id}. {pokemon.name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pokemons;
