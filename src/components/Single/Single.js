import React from "react";
import "./Single.css";
const Single = (single) => {
  const { Age, description, img, name, time } = single.single;
  return (
    <div className="single-cart">
      <img className="cart-img" src={img} alt="" />
      <h2>{name}</h2>
      <p className="similer-m">{description}</p>
      <p className="similer-m">For age: {Age}</p>
      <p className="similer-m">Time required: {time}hrs</p>
      <button className="add-btn">Add to list</button>
    </div>
  );
};

export default Single;
