import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";

import CardProduct from "../CardProduct";
import NoResults from "../../assets/no_results.png";
import "./styles.scss";

const Body = () => {
  const results = useSelector((state) => state);

  const haveResults = (results) => {
    return (
      results && results.mercadoL && results.mercadoL.results[0] !== "undefined"
    );
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/" className="breadcrumb-container">
          Inicio
        </Breadcrumb.Item>
      </Breadcrumb>
      <section className="body-container">
        {haveResults(results) &&
          results.mercadoL.results.map((element) => {
            return (
              <>
                <CardProduct
                  id={element.id}
                  thumbnail={element.picture}
                  price={element.price.amount}
                  shipping={element.free_shipping}
                  city={element.address.state_name}
                  titleProduct={element.title}
                />
                <hr />
              </>
            );
          })}
        <section className="body-noresults">
          <div className="body-noresults_img">
            <img src={NoResults} alt="No hay resultados" width={"100%"} />
          </div>
          <div>
            <p className="body-noresults_text">
              No hay resultados para tu búsqueda.
            </p>
            <p className="body-noresults_text">Intenta con otra palabra</p>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default Body;
