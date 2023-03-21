import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Shipping from "../../assets/shipping.png";
import { useNavigate } from "react-router-dom";

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
          <Col xs={12} md={4} lg={3} xl={2}>
            <div className="cardProduct-img">
              <img src={props.thumbnail} alt="img-product" width={"100%"} />
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} className="cardProduct-description">
            <Row className="cardProduct-priceCity">
              <Col lg={{ span: 4 }} className="cardProduct-price">
                <span className="descriptionProduct-price">
                  $ {props.price.amount}
                  {props.price.decimals !== null
                    ? `.${props.price.decimals.toString().padStart(2, "0")}`
                    : null}
                </span>
                {props.shipping ? (
                  <img
                    src={Shipping}
                    alt="envio gratis"
                    className="descriptionProduct-shipping"
                  />
                ) : null}
              </Col>
              <Col lg={{ span: 4, offset: 4 }}>
                <span className="descriptionProduct-city">{props.city}</span>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 6 }}>
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
