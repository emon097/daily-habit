import React, { useState } from "react";
import "./Cart.css";
import Break from "../../Break/Break";
import swal from "sweetalert";
const Cart = (prop) => {
  const [breaks, setBreaks] = useState(0);
  const { habit } = prop;

  let total = 0;
  for (const habits of habit) {
    total = total + habits.time;
  }
  const addBreak = (breakss) => {
    const newhabit = [breakss];
    setBreaks(newhabit);
  };
  const alert = () => {
    swal("Good job!", " Your Activity Completed!", "success");
  };
  return (
    <div className="side-bar">
      <Break addBreak={addBreak}></Break>
      <div className="full-sidebar">
        <div className="main">
          <h3>Time Manage </h3>
          <div className="total-time">
            <h3>Total Time </h3>
            <p>
              <span>{total}</span> hrs
            </p>
          </div>
          <div className="break-time">
            <h3>Break Time</h3>
            <p>
              <span>{breaks}</span> min
            </p>
          </div>
          <button onClick={alert} className="activity-btn">
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
