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
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo_ML.png";
import SearchIcon from "../../assets/icon_search.png";

import "./styles.scss";

const Header = () => {
  const [stateSearch, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleResults = (e) => {
    e.preventDefault();
    dispatch(fetchAllproducts(stateSearch));
    navigate(`/items?search=${stateSearch}`);
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
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Body>
              <Form className="d-flex">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="Logo" width={"100%"} />
                </Link>
                <Form.Control
                  type="search"
                  placeholder="Nunca dejes de buscar"
                  aria-label="Search"
                  onChange={handleChangeSearch}
                />
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={handleResults}
                >
                  <img src={SearchIcon} alt="icono búsqueda" />
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
