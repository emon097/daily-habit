import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Cart from "../Single/Cart/Cart";
import Single from "../Single/Single";
import "./Home.css";
const Home = () => {
  const [single, setSingle] = useState([]);
  useEffect(() => {
    fetch("time.json")
      .then((res) => res.json())
      .then((data) => setSingle(data));
  }, []);
  return (
    <div className="home-js">
      <Nav></Nav>
      <h2> Select today’s Rutin </h2>
      <div className="header">
        <div className="single-cart1">
          {single.map((singles) => (
            <Single single={singles} key={singles.id}></Single>
          ))}
        </div>
        <div>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
