import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const CargueBD = () => {
  return (
    <Container className="m-5">
      <Row className="d-flex align-items-center">
        <Col xs={12} md={8}>Table</Col>
        <Col xs={6} md={4}>
          <h2>Cargue a Base de datos</h2>
          <Button className="w-100 mt-3" variant="primary">Cargue Manual</Button>
          <Button className="w-100 mt-3" variant="success">Cargue .Json</Button>
          <Button className="w-100 mt-3" variant="outline-success">Cargue .csv</Button>
        </Col>
      </Row>
    </Container>
  );
};
