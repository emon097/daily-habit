import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const getitem = localStorage.getItem("break", breaks);
    setBreaks(getitem);
  }, [breaks]);
  const addBreak = (breakss) => {
    const setItem = localStorage.setItem("break", breakss);
    const newhabit = [breakss];
    setBreaks(newhabit, setItem);
  };
  const alert = () => {
    swal("Good job!", " Your Activity Completed!", "success");
  };
  return (
    <div className="side-bar">
      <h1> total activity</h1>
      <div className="profile-section">
        <div>
          <img
            className="profile-img"
            src="https://img.freepik.com/free-photo/happy-bearded-young-man-looks-with-joyful-expression-has-friendly-smile-wears-yellow-sweater-red-hat_295783-1388.jpg?w=1060&t=st=1664422088~exp=1664422688~hmac=334fe0024d1c5f474b44144aacf3bb16dff795b3b5239836ff9ce4014b91c713"
            alt=""
          />
        </div>
        <div>
          <h4 className="name">MD EMON HOSSAIN</h4>
          <small>Address: Dhaka</small>
        </div>
      </div>
      <div className="designation">
        <p className="occ">
          {" "}
          <strong>Occupation</strong> :Developer
        </p>
        <p>
          {" "}
          <strong>Age</strong> :20
        </p>
      </div>{" "}
      <Break addBreak={addBreak}></Break>
      <div className="full-sidebar">
        <div className="main">
          <h3>Time Management</h3>
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
