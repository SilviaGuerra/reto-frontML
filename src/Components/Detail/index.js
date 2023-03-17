import React from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Detail = () => {
  const results = useSelector((state) => state);
  console.log(results);
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="body-container">
        <Row>
          <Col lg="8">
            {results &&
            results.mercadoL &&
            results.mercadoL.results[0] &&
            results.mercadoL.results[0].results !== "undefined"
              ? results.mercadoL.results[0].results.map((element) => {
                  return (
                    <>
                      {/* {console.log(element.id)} */}
                      {element.id === "MLA1368539200" ? (
                        <section className="detail-img">
                          <img
                            src={element.thumbnail}
                            alt="imagen detalle"
                            width={"100%"}
                          />
                        </section>
                      ) : null}
                      {/* <section>
                        jfjfj
                        <img src={element[0].thumbnail} alt="imagen detalle" />
                      </section> */}
                    </>
                  );
                })
              : null}
          </Col>
          <Col lg="4">
            {results &&
            results.mercadoL &&
            results.mercadoL.results[0] &&
            results.mercadoL.results[0].results !== "undefined"
              ? results.mercadoL.results[0].results.map((element) => {
                  return (
                    <>
                      {/* {console.log(element.id)} */}
                      {element.id === "MLA1368539200" ? (
                        <section className="detail-information">
                          <span>
                            {element.attributes[1].value_name} -{" "}
                            {element.available_quantity} vendidos
                          </span>
                        </section>
                      ) : null}
                      {/* <section>
                        jfjfj
                        <img src={element[0].thumbnail} alt="imagen detalle" />
                      </section> */}
                    </>
                  );
                })
              : null}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Detail;
