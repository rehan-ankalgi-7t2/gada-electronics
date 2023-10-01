import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
// import ResponsiveAppBar from "./components/Appbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      {/* <ResponsiveAppBar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
