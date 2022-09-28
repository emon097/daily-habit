import React from "react";
import "./Single.css";
const Single = (single) => {
  const { Age, description, img, name, time } = single.single;
  return (
    <div className="single-cart">
      <img className="cart-img" src={img} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>For age: {Age}</p>
      <p>Time required: {time}</p>
      <button>Add to list</button>
    </div>
  );
};

export default Single;
