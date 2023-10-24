import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate(redirect);
    } catch (error) {
      // console.log(error);
      toast.error(error?.data?.message || error?.error);
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
          onSubmit={handleLoginSubmit}
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
            onChange={handleEmailChange}
            value={email}
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
            value={password}
          />
          <Button size="large" variant="contained" color="yellow" type="submit">
            Login
          </Button>

          {isLoading && <Loader />}
        </form>
        <p>
          Don't have an account?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Sign up here
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default LoginScreen;
