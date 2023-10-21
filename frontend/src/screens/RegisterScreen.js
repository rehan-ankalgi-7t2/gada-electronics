import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ height: "88vh" }}>
      <Container
        className="py-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
          height: "100%",
        }}
      >
        <form
          className="my-5"
          style={{
            width: "40%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexFlow: "column",
          }}
        >
          <h1>Register to enjoy our services and products</h1>
          <TextField
            variant="outlined"
            label="Name"
            placeholder="Enter your name"
            required
            type="text"
            fullWidth
            margin="normal"
            color="appleBlack"
          />
          <TextField
            variant="outlined"
            label="email"
            placeholder="Email"
            required
            type="email"
            fullWidth
            margin="normal"
            color="appleBlack"
          />
          <TextField
            label="Enter your password"
            placeholder="password"
            type="password"
            required
            fullWidth
            margin="normal"
            color="appleBlack"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox color="yellow" />}
            label="Is Admin?"
          />
          <Button size="large" variant="contained" color="yellow">
            Register
          </Button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </Container>
    </div>
  );
};

export default RegisterScreen;
