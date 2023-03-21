import React, { useEffect } from "react";
import { Container, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemDetails } from "../../store/slices/busqueda";
import { useParams } from "react-router-dom";
import "./styles.scss";

const Detail = () => {
  const details = useSelector((state) => state.mercadoL.details);
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(fetchItemDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/" className="breadcrumb-container">
          Inicio
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item href="/" className="breadcrumb-container">
          Atrás
        </Breadcrumb.Item> */}
      </Breadcrumb>
      <section className="body-container">
        <>
          <Row>
            <Col xs={12} md={8}>
              <section className="detail-img">
                <img
                  src={details.picture}
                  alt="imagen detalle"
                  width={"100%"}
                />
              </section>
            </Col>
            <Col xs={12} md={4}>
              <section className="detail-information">
                <span className="detail-conditions">
                  {details.condition} - {details.sold_quantity} vendidos
                </span>
                <p className="detail-title">{details.title}</p>
                <p className="detail-price">
                  ${" "}
                  {details &&
                  details.price &&
                  details.price.amount !== "undefined"
                    ? details.price.amount
                    : 0}
                </p>
                <Button className="detail-buy">Comprar</Button>
              </section>
            </Col>
          </Row>
          <Row className="detail-description">
            <p className="detail-description_title">Descripción del producto</p>
            <p className="detail-description_text">{details.description}</p>
          </Row>
        </>
      </section>
    </Container>
  );
};

export default Detail;
