import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct";
import "./styles.scss";

const Body = () => {
  const results = useSelector((state) => state);

  const haveResults = (results) => {
    return (
      results && results.mercadoL && results.mercadoL.results[0] !== "undefined"
    );
  };
  console.log(results, "ree");

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/"></Breadcrumb.Item>
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="body-container">
        {haveResults(results)
          ? results.mercadoL.results.map((element) => {
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
            })
          : null}
      </div>
    </Container>
  );
};

export default Body;
