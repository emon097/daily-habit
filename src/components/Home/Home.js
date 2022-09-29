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
      {/* question ans */}
      <div className="faq">
        <strong>how does react works ?</strong>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. <br /> React components work similarly to JavaScript
          functions as they accept arbitrary inputs called properties or props.{" "}
          <br />
          Returned React elements determine how the UI will look at the client
          end. <br />
          Here’s an example of a function component that returns a React element
        </p>
      </div>
      <div>
        <strong>difference between props and state ?</strong>
        <p>
          <ul>
            <li>Props are used to pass data from one component to another.</li>
            <li>
              The state is a local data storage that is local to the component
              only and cannot be passed to other components.
            </li>
            <li>
              The this.setState property is used to update the state values in
              the component.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <strong>
          What else can be work other than load data with the useEffect API ?
        </strong>
        <ul>
          <li>Running once on mount: fetch API data</li>
          <li>Running on state change: validating input field</li>
          <li>Running on state change: live filtering</li>
          <li>Running on state change: trigger animation on new array value</li>
          <li>
            Running on props change: update paragraph list on fetched API data
            update
          </li>
          <li>
            Running on props change: updating fetched API data to get BTC
            updated price
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
