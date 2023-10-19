import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LinkContainer } from "react-router-bootstrap";
import Jetha from "../assets/images/jetha-logo.png";
import { Badge, Button } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#F5F5F5", color: "black" }}
      >
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <Image
                src={Jetha}
                alt="Jethalal logo"
                style={{ height: "48px", borderRadius: "100px" }}
                className="me-3"
              />
              <strong>Gada Electronics</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <LinkContainer to={"/"}>
                <Nav.Link active>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/about"}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  Cart
                  <Badge
                    badgeContent={cartItems.reduce((a, c) => a + c.qty, 0)}
                    max={9}
                    color="yellow"
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link href="#link">
                  <Button
                    variant="contained"
                    color="yellow"
                    disableElevation
                    sx={{ color: "white" }}
                  >
                    Login
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
