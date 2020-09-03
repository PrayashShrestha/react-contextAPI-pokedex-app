import React, { useContext } from "react";
import { PokedexContext } from "../../context/ContextProvider";
import { Card, CardTitle, Row, Col, CardBody } from "reactstrap";

const Pokemon = () => {
  const { states, imageUrl } = useContext(PokedexContext);
  const { selectedPokemon } = states;

  return (
    <div className="container mt-5 mb-5 mx-auto">
      <Row>
        <Col sm="8" xs="8">
          <Card className="border-dark">
            <CardTitle className="mx-auto text-uppercase font-weight-bold text-center">
              {selectedPokemon.id}. {selectedPokemon.name}
            </CardTitle>
            <img src={imageUrl} alt="Image not found" />

            <CardBody className="mx-auto">
              <Row xs="1" sm="1">
                <Col xs="8">
                  <span className="border rounded-circle border-dark display-4">
                    {selectedPokemon.weight}
                  </span>
                  <h5>Weight</h5>
                </Col>
                <Col className="float-right">
                  <span className="border rounded-circle border-dark display-4">
                    {selectedPokemon.height}
                  </span>
                  <h5>Height</h5>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pokemon;
