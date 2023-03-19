import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Shipping from "../../assets/shipping.png";
import { Link, useNavigate } from "react-router-dom";
// import Details from "../Detail";

import "./styles.scss";

const CardProduct = (props) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate(`/items/${props.id}`);
  };

  return (
    <>
      <section className="body-cardProduct">
        <Row>
          <Col lg={{ span: 2 }}>
            <div className="cardProduct-img">
              <img src={props.thumbnail} alt="img-product" width={"100%"} />
            </div>
          </Col>
          <Col lg={{ span: 9 }} className="cardProduct-description">
            <Row className="cardProduct-priceCity">
              <Col lg={{ span: 6 }}>
                <span className="descriptionProduct-price">
                  $ {props.price}
                </span>
                {props.shipping.free_shipping ? (
                  <img
                    src={Shipping}
                    alt="envio gratis"
                    className="descriptionProduct-shipping"
                  />
                ) : null}
              </Col>
              <Col lg={{ span: 4, offset: 2 }}>
                <span className="descriptionProduct-city">{props.city}</span>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 4 }}>
                <Button
                  variant="link"
                  className="descriptionProduct-text"
                  onClick={handleRedirect}
                >
                  {props.titleProduct}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default CardProduct;
