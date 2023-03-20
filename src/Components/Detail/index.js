import React from "react";
import { Container, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const results = useSelector((state) => state);
  let params = useParams();
  const compareResults = () => {
    return results &&
      results.mercadoL &&
      results.mercadoL.results[0] &&
      results.mercadoL.results[0].mercadoL &&
      results.mercadoL.results[0].mercadoL.results[0] &&
      results.mercadoL.results[0].mercadoL.results[0].results !== "undefined"
      ? results.mercadoL.results[0].mercadoL.results[0].results.find((el) => {
          return console.log("MLA1314445322", "eeeel");
        })
      : console.log("Sin id");
  };

  console.log(compareResults);
  // const navigate = useNavigate();

  // const handleRedirect = () => {
  //   return navigate(`/items/${props.id}`);
  // };
  // console.log(results);
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
            {
              // results &&
              // results.mercadoL &&
              // results.mercadoL.results[0] &&
              // results.mercadoL.results[0].results !== "undefined"
              // ? results.mercadoL.results[0].results.map((element) => {
              // results.mercadoL.results[0].mercadoL.results[0].results.map(
              //   (element) => {
              //     return (
              //       <>
              //         {/* {console.log(element.id)} */}
              //         {element.id === "MLA1368539200" ? (
              //           <section className="detail-img">
              //             <img
              //               src={element.thumbnail}
              //               alt="imagen detalle"
              //               width={"100%"}
              //             />
              //           </section>
              //         ) : null}
              //         {/* <section>
              //           jfjfj
              //           <img src={element[0].thumbnail} alt="imagen detalle" />
              //         </section> */}
              //       </>
              //     );
              //   }
              // )
              // : null
            }
          </Col>
          <Col lg="3">
            {/* {
            results &&
            results.mercadoL &&
            results.mercadoL.results[0] &&
            results.mercadoL.results[0].results !== "undefined"
              ? results.mercadoL.results[0].results.map((element) => { */}
            {/* return (
                    <> */}
            {/* {console.log(element.id)} */}
            {/* {element.id === "MLA1368539200" ? (
                        <section className="detail-information">
                          <span>
                            {element.attributes[1].value_name} -{" "}
                            {element.available_quantity} vendidos
                          </span>
                          <p>{element.title}</p>
                          <p>$ {element.price}</p>
                          <Button>Comprar</Button>
                        </section>
                      ) : null}
                      {/* <section>
                        jfjfj
                        <img src={element[0].thumbnail} alt="imagen detalle" />
                      </section> */}
            {/* </>
                  );
                })
              : null} */}{" "}
            */
          </Col>
        </Row>
        <Row>
          <p>Descripción del producto</p>
          <p>lorem dhsgfdjhsb sgfhjsdfb sgfjehsfb </p>
        </Row>
      </div>
    </Container>
  );
};

export default Detail;
