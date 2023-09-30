import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Jetha from "../assets/images/jetha-logo.png";

const Header = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        // bg="dark"
        // variant="dark"
        data-bs-theme="dark"
        // className="bg-body-tertiary"
        style={{ backgroundColor: "black", color: "white" }}
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
            <Nav className="ms-auto">
              <LinkContainer to={"/"}>
                <Nav.Link active>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/about"}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  Cart <FaShoppingCart />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link href="#link">
                  Login <FaUser />
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
