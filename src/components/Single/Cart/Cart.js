import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
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
      </div>
      <h3>Add Break</h3>
      <div className="break">
        <button className="single-btn">
          <span>10</span>m
        </button>
        <button className="single-btn">
          <span>10</span>m
        </button>
        <button className="single-btn">
          <span>10</span>m
        </button>
        <button className="single-btn">
          {" "}
          <span>10</span> m
        </button>
      </div>
    </div>
  );
};

export default Cart;
