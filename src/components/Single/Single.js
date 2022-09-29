import React from "react";
import "./Single.css";
const Single = (single) => {
  const { Age, description, img, name, time } = single.single;
  return (
    <div className="single-cart">
      <img className="cart-img" src={img} alt="" />
      <h2>{name}</h2>
      <p className="similer-m">
        {" "}
        <strong>{description}</strong>{" "}
      </p>
      <p className="similer-m">
        {" "}
        <strong>For age:</strong> {Age}
      </p>
      <p className="similer-m">
        {" "}
        <strong>Time required:</strong> {time}hrs
      </p>
      <button className="add-btn">Add to list</button>
    </div>
  );
};

export default Single;
