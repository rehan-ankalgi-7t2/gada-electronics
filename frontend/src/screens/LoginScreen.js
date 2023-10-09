import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginScreen = () => {
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
          <h1>Log into your account</h1>
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
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button size="large" variant="contained" color="yellow">
            Login
          </Button>
        </form>
        <p>
          Don't have an account? <Link to={"/register"}>Sign up here</Link>
        </p>
      </Container>
    </div>
  );
};

export default LoginScreen;
