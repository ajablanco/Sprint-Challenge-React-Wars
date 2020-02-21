import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Container, Row } from "reactstrap";




function CharacterCard(props) {
  return (
    <Container className="charCard">
      <Row>

          <Card body inverse color="info">
            <CardTitle className="cardTitle">{props.human.name}</CardTitle>
            <CardText>Gender: {props.human.gender}</CardText>
            <CardText>Birth Year: {props.human.birth_year}</CardText>
            <CardText>Height: {props.human.height}</CardText>
            <CardText>Hair Color: {props.human.hair_color}</CardText>
            <CardText>Eye Color: {props.human.eye_color}</CardText>
          </Card>

      </Row>
    </Container>
  );
}

export default CharacterCard;
