import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 rounded"
      bg="dark"
      data-bs-theme="dark"
      variant="dark"
    >
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
