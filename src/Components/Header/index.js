import React, { useState } from "react";
import {
  Row,
  Container,
  Form,
  Navbar,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllproducts } from "../../store/slices/busqueda";
import Logo from "../../assets/Logo_ML.png";

import "./styles.scss";

const Header = () => {
  const [stateSearch, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleResults = (e) => {
    e.preventDefault();
    dispatch(fetchAllproducts(stateSearch));
  };

  return (
    // <Container fluid>
    //   <Row className="justify-content-md-center">
    //     <Col xs lg="2">
    //       1 of 3
    //     </Col>
    //     <Col md="auto">Variable width content</Col>
    //     <Col xs lg="2">
    //       3 of 3
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid>
      <Row>
        <Navbar bg="light">
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={"50%"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChangeSearch}
                />
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={handleResults}
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Row>
    </Container>
  );
  {
    /* 
      <Navbar bg="light" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
     */
  }
};

export default Header;
