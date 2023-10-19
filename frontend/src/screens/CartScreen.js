import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Container,
  ListGroupItem,
} from "react-bootstrap";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Button } from "@mui/material";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Aapka shopping Cart 🛒</h1>
          <h3>Items</h3>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {cartItems.length <= 0 ? (
            <Message>
              Your Cart is empty <Link to={"/"}>Go back</Link>
            </Message>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md={1}>
                      <Image rounded fluid src={item.image} alt={item.name} />
                    </Col>
                    <Col md={6}>
                      <Link
                        style={{ color: "black", textDecoration: "none" }}
                        to={`/product/${item._id}`}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) => {}}
                      >
                        {/**
                         * @description
                         * 1. Array(product.countInStock).keys(): This creates a new array with a length equal to product.countInStock and then retrieves an iterator of its keys (indices).
                         * 2. map((x) => ...): It iterates over each index in the array.
                         * 3. <option key={x + 1} value={x + 1}>{x + 1}</option>: For each index (x), it creates an <option> element. The key attribute is set to x + 1 for React to keep track of each element efficiently. The value attribute is also set to x + 1, which means the value of each <option> will be the index + 1. The text content of the <option> is also set to x + 1, which would be displayed to the user.
                         *
                         * @summary So, overall, this code generates a dropdown list with options ranging from 1 to product.countInStock, allowing the user to select a quantity within the available stock range.
                         */}
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <IconButton color="orange" size="large">
                        <DeleteOutlineOutlinedIcon color="inherit" />
                      </IconButton>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>Subtotal</h2>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)} Items
                  </Col>
                  <Col>
                    <strong>
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.qty * item.price,
                        0
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <Button
                      variant="contained"
                      color="yellow"
                      endIcon={<ShoppingCartCheckoutOutlinedIcon />}
                      size="large"
                      sx={{
                        width: "100%",
                        display: "inline-block",
                        height: "80px",
                      }}
                    >
                      Proceed to checkout
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
