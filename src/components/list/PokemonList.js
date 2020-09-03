import React, { useContext } from "react";
import Pokemons from "./Pokemons";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { PokedexContext } from "../../context/ContextProvider";

const PokemonList = () => {
  const { onButtonClick, prevUrl, nextUrl } = useContext(PokedexContext);
  return (
    <div className="container-fluid mt-5 mb-5">
      <Row sm="1">
        <Col sm="8" xs="8" className="mx-auto ">
          <Card className="border-danger border-weight-bold bg-info">
            <CardBody>
              <Pokemons />
              <Button onClick={onButtonClick} value={prevUrl}>
                Prev
              </Button>
              <Button
                className="float-right"
                onClick={onButtonClick}
                value={nextUrl}
              >
                Next
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PokemonList;
