import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { List, ListItem } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductDetails = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data.productData[0]);
      // console.log(data.productData[0]);
    };

    getProductDetails();
  }, []);

  return (
    <>
      <Container>
        <Link to="/">
          <Button
            startIcon={<ArrowBackIosNewIcon />}
            className="my-3"
            color="appleBlack"
            // variant="outlined"
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
                    disabled={product.countInStock < 0}
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
      </Container>
    </>
  );
};

export default ProductScreen;
