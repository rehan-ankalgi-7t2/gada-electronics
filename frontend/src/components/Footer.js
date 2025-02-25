import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <Row>
        <Col className="text-center py-3">
          Gada Electronics &copy; {currentYear}
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
