import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigateNext } from "@mui/icons-material";
import { saveShippingAddress } from "../slices/cartSlice";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  console.log(shippingAddress);

  const [address, setAddress] = useState(
    shippingAddress.address ? shippingAddress.address : ""
  );
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode ? shippingAddress.postalCode : ""
  );
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : ""
  );
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : ""
  );

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      saveShippingAddress({
        shippingAddress: { address, postalCode, city, country },
      })
    );
    navigate("/payment");
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
          <h1>Enter shipping details for a fata fat deilvery</h1>
          <TextField
            variant="outlined"
            // label="Address"
            placeholder="Enter the delivery address"
            value={address}
            required
            type="text"
            fullWidth
            margin="normal"
            color="appleBlack"
            onChange={handleAddressChange}
          />
          <TextField
            variant="outlined"
            // label="postal code"
            placeholder="Enter Postal Code"
            required
            type="number"
            fullWidth
            margin="normal"
            color="appleBlack"
            value={postalCode}
            onChange={handlePostalCode}
          />
          <TextField
            // label="City"
            placeholder="Entry City Name"
            type="text"
            required
            fullWidth
            margin="normal"
            color="appleBlack"
            variant="outlined"
            value={city}
            onChange={handleCityChange}
          />
          <TextField
            // label="Country"
            placeholder="Entry Country Name"
            type="text"
            required
            fullWidth
            margin="normal"
            color="appleBlack"
            variant="outlined"
            value={country}
            onChange={handleCountryChange}
          />

          <Button
            size="large"
            variant="contained"
            color="yellow"
            type="submit"
            disableElevation
            endIcon={<NavigateNext />}
          >
            Proceed to Checkout
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ShippingScreen;
