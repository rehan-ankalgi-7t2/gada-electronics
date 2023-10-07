import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import Hero from "../components/Hero";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data.products);
      // console.log(data.products);
    };

    getAllProducts();
  }, []);

  return (
    <div>
      <Hero />
      <Container className="my-5">
        <h1>Latest Products</h1>
        <Row mb="3">
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
