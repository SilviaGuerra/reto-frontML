import React from "react";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import Shipping from "../../assets/shipping.png";
import "./styles.scss";

const Body = () => {
  const results = useSelector((state) => state);
  console.log(results, "ree");

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="body-container">
        {results &&
        results.mercadoL &&
        results.mercadoL.results[0] &&
        results.mercadoL.results[0].results !== "undefined"
          ? results.mercadoL.results[0].results.map((element) => {
              return (
                <>
                  <div className="body-cardProduct">
                    <Row>
                      <Col lg={{ span: 2 }}>
                        <img
                          src={element.thumbnail}
                          alt="img-product"
                          className="cardProduct-img"
                        />
                      </Col>
                      <Col lg={{ span: 9 }} className="cardProduct-description">
                        <Row className="cardProduct-priceCity">
                          <Col lg={{ span: 6 }}>
                            <span className="descriptionProduct-price">
                              {/* $ {element.installments.amount} */}${" "}
                              {element.price}
                            </span>
                            {element.shipping.free_shipping ? (
                              <img src={Shipping} alt="envio gratis" />
                            ) : null}
                          </Col>
                          <Col lg={{ span: 4, offset: 2 }}>
                            <span>{element.address.state_name}</span>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{ span: 4 }}>
                            <p className="descriptionProduct-text">
                              {element.title}
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
                </>
              );
            })
          : null}
      </div>
    </Container>
  );
};

export default Body;
