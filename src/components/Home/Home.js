import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Cart from "../Single/Cart/Cart";
import Single from "../Single/Single";
import "./Home.css";
const Home = () => {
  const [single, setSingle] = useState([]);
  const [habit, setHabit] = useState([]);
  useEffect(() => {
    fetch("time.json")
      .then((res) => res.json())
      .then((data) => setSingle(data));
  }, []);
  const addtocart = (singlecart) => {
    const newhabit = [...habit, singlecart];
    setHabit(newhabit);
  };

  return (
    <div className="home-js">
      <Nav></Nav>
      <h2> Select today’s Rutine </h2>
      <div className="header">
        <div className="single-cart1">
          {single.map((singles) => (
            <Single
              addtocart={addtocart}
              singlecart={singles}
              key={singles.id}
            ></Single>
          ))}
        </div>
        <div>
          <Cart habit={habit}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
