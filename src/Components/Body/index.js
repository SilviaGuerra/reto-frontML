import React from "react";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import Product from "../../assets/img-muestra.jpg";
import Shipping from "../../assets/shipping.png";
import "./styles.scss";

const Body = () => {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="body-container">
        <div className="body-cardProduct">
          <Row>
            <Col lg={{ span: 2 }}>
              <img
                src={Product}
                alt="img-product"
                className="cardProduct-img"
              />
            </Col>
            <Col lg={{ span: 9 }} className="cardProduct-description">
              <Row className="cardProduct-priceCity">
                <Col lg={{ span: 6 }}>
                  <span className="descriptionProduct-price">$ 1.980</span>
                  <img src={Shipping} alt="envio gratis" />
                </Col>
                <Col lg={{ span: 4, offset: 2 }}>
                  <span>Mendoza</span>
                </Col>
              </Row>
              <Row>
                <Col lg={{ span: 4 }}>
                  <p className="descriptionProduct-text">
                    hkshfkdshfksdfjksfhj hkfskhfkshfdhskjfskjf jkhdksahd
                  </p>
                </Col>
              </Row>
            </Col>
            {/* <Col lg={{ span: 4 }} className="cardProduct-description">
              <p className="descriptionProduct-price">$ 1.980 </p>
              <p className="descriptionProduct-text">
                hkshfkdshfksdfjksfhj hkfskhfkshfdhskjfskjf jkhdksahd
              </p>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>Mendoza</Col> */}
          </Row>
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default Body;
