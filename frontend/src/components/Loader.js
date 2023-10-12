import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loader;
