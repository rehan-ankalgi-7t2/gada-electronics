import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row mb="3">
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
