import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";
import "./styles.scss";

const Body = () => {
  const results = useSelector((state) => state);

  const haveResults = (results) => {
    return (
      results &&
      results.mercadoL &&
      results.mercadoL.results[0] &&
      results.mercadoL.results[0].mercadoL &&
      results.mercadoL.results[0].mercadoL.results[0] &&
      results.mercadoL.results[0].results !== "undefined"
    );
  };
  console.log(results, "ree");

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div className="body-container">
        {haveResults(results)
          ? results.mercadoL.results[0].mercadoL.results[0].results.map(
              (element) => {
                return (
                  <>
                    <CardProduct
                      id={element.id}
                      thumbnail={element.thumbnail}
                      price={element.price}
                      shipping={element.shipping}
                      city={element.address.state_name}
                      titleProduct={element.title}
                    />
                    <hr />
                  </>
                );
              }
            )
          : null}
      </div>
    </Container>
  );
};

export default Body;
