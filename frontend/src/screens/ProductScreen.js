import { Button, Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import products from "../products";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { List, ListItem } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);

  return (
    <>
      <Link to="/">
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          className="my-3"
          color="white"
        >
          back
        </Button>
      </Link>
      <Row>
        <Col md={8}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={4}>
          <List>
            <ListItem disablePadding>
              <Col>
                <h3>{product.name}</h3>
              </Col>
            </ListItem>
            <ListItem disablePadding>
              <Col>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Col>
            </ListItem>
            <ListItem disablePadding>
              <Col>
                <h4>${product.price}</h4>
              </Col>
            </ListItem>
            <ListItem disablePadding>
              Status: {product.countInStock > 0 ? "In Stock" : "Out of stock"}
            </ListItem>
            <divider />
            <ListItem disablePadding className="mt-4">
              <Col>
                <Button
                  size="large"
                  sx={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px",
                    width: "100%",
                    borderRadius: "0",
                  }}
                  color="white"
                  variant="contained"
                  endIcon={<AddShoppingCartIcon />}
                >
                  Add to cart
                </Button>
              </Col>
            </ListItem>
            <ListItem disablePadding className="mt-3">
              <Col>
                <p>{product.description}</p>
              </Col>
            </ListItem>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
