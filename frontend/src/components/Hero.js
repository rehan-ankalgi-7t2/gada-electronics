import { Button } from "@mui/material";
import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import JethalalPortrait from "../assets/images/jethalal.png";

const Hero = () => {
  return (
    <div
      style={{
        height: "fit-content",
        backgroundColor: "#FFA500",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col
            className="pe-5"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexFlow: "column",
            }}
          >
            <h1 style={{ fontSize: "60px" }}>
              Gada Electronics me aapka swagat hai
            </h1>
            <h5>Special products ekdam bhav to bhav price me</h5>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white", padding: "24px" }}
              size="large"
              disableElevation
              className="mt-5"
            >
              Check out all the products
            </Button>
          </Col>
          <Col>
            <Image fluid src={JethalalPortrait} alt={"Jethalal's Portrait"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
