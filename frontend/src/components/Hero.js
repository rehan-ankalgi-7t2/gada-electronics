import { Button } from "@mui/material";
import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import JethalalPortrait from "../assets/images/jethalal.png";

const Hero = () => {
  return (
    <div
      style={{
        height: "fit-content",
        // backgroundColor: "#FFA500",
        background:
          "repeating-radial-gradient(circle at bottom right, #F59E0B, #e36048 16%)",
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
            <h1
              style={{
                fontSize: "60px",
                // WebkitTextStrokeColor: "#00000088",
                // WebkitTextStrokeWidth: "4px",
              }}
            >
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
            <Image
              fluid
              src={JethalalPortrait}
              alt={"Jethalal's Portrait"}
              style={{
                filter: "drop-shadow(0 0rem 2rem rgba(0, 0, 0, 0.24))",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
