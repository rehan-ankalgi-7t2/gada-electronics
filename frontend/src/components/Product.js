import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Button } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3"
      style={{ backgroundColor: "black", color: "white", borderRadius: "0" }}
    >
      <Link to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/products/${product._id}`}
        >
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {/* <Card.Text>{product.description}</Card.Text> */}

        <Card.Text as="h3" className="my-2">
          ${product.price}
        </Card.Text>
        <Button
          variant="outlined"
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            width: "100%",
            borderRadius: "0",
            color: "white",
          }}
          endIcon={<AddShoppingCart />}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
