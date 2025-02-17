import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  const { userInfo } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      console.log(error);
      toast.error("Ek Poblem hogaya, firse ek baar register kariye!");
    }
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
          onSubmit={handleSubmit}
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
            onChange={handleUsernameChange}
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />

          <Button size="large" variant="contained" color="yellow" type="submit">
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
