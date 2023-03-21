import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Navbar, Button } from "react-bootstrap";
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("search");
    dispatch(fetchAllproducts(myParam));
  }, [dispatch]);

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
    <Container fluid>
      <Row>
        <Navbar bg="light">
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Row>
              <Col
                sm={{ span: 1 }}
                md={{ span: 1 }}
                lg={{ span: 1, offset: 1 }}
              >
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="Logo" width={"100%"} />
                </Link>
              </Col>
              <Col sm={{ span: 1 }} md={{ span: 5 }} lg={{ span: 9 }}>
                <Form className="d-flex">
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
              </Col>
            </Row>
          </Navbar.Offcanvas>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Header;
