import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { List, ListItem } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data, isLoading, error } = useGetProductDetailsQuery(productId);
  const product = data?.productData[0];
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <>
      <Container style={{ minHeight: "88vh" }}>
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
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message
            variant="danger"
            children={error?.data?.message || error?.error}
          />
        ) : (
          // console.log(data?.productData[0])
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
                  Status:{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                </ListItem>
                {product.countInStock > 0 && (
                  <ListItem>
                    <Col>Quantity</Col>
                    <Col>
                      <Form>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => Number(setQty(e.target.value))}
                        >
                          {/**
                           * @description
                           * 1. Array(product.countInStock).keys(): This creates a new array with a length equal to product.countInStock and then retrieves an iterator of its keys (indices).
                           * 2. map((x) => ...): It iterates over each index in the array.
                           * 3. <option key={x + 1} value={x + 1}>{x + 1}</option>: For each index (x), it creates an <option> element. The key attribute is set to x + 1 for React to keep track of each element efficiently. The value attribute is also set to x + 1, which means the value of each <option> will be the index + 1. The text content of the <option> is also set to x + 1, which would be displayed to the user.
                           *
                           * @summary So, overall, this code generates a dropdown list with options ranging from 1 to product.countInStock, allowing the user to select a quantity within the available stock range.
                           */}
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Form>
                    </Col>
                  </ListItem>
                )}
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
                      onClick={addToCartHandler}
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
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
