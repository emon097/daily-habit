import React from "react";
import Nav from "../Nav/Nav";
import Cart from "../Single/Cart/Cart";
import Single from "../Single/Single";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-js">
      <Nav></Nav>
      <h2> Select today’s Rutin </h2>
      <div className="header">
        <Single></Single>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
