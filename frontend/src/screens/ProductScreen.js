import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);

  return (
    <div>
      <Button></Button>
      <h1>ProductScreen</h1>
    </div>
  );
};

export default ProductScreen;
