import React from "react";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";

import "./styles.scss";

const Body = () => {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="body-container">
        <Row className="justify-content-md-center">
          <Col xs lg="3">
            imagen
          </Col>
          <Col md="auto" lg="4">
            Description
          </Col>
          <Col xs lg="4">
            Mendoza
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Body;
