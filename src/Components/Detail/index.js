import React, { useEffect } from "react";
import { Container, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemDetails } from "../../store/slices/busqueda";
import { useParams } from "react-router-dom";

const Detail = () => {
  const details = useSelector((state) => state.mercadoL.details);
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(fetchItemDetails(params.id));
  }, [dispatch, params.id]);

  // console.log(details.price, details.price.amount);
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <section className="body-container">
        <>
          <Row>
            <Col lg="8">
              <section className="detail-img">
                <img
                  src={details.picture}
                  alt="imagen detalle"
                  width={"100%"}
                />
              </section>
            </Col>
            <Col lg="3">
              <section className="detail-information">
                <span>
                  {details.condition} - {details.sold_quantity} vendidos
                </span>
                <p>{details.title}</p>
                <p>
                  ${" "}
                  {details &&
                  details.price &&
                  details.price.amount !== "undefined"
                    ? details.price.amount
                    : 0}
                </p>
                <Button>Comprar</Button>
              </section>
            </Col>
          </Row>
          <Row>
            <p>Descripción del producto</p>
            <p>{details.description}</p>
          </Row>
        </>
      </section>
    </Container>
  );
};

export default Detail;
