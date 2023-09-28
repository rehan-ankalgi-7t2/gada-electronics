import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

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
          <Navbar.Brand href="#home">
            <strong>Rehoshop</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">
                Cart <FaShoppingCart />
              </Nav.Link>
              <Nav.Link href="#link">
                Login <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
