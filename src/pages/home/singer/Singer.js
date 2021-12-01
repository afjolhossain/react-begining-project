import React from "react";
import "./Singer.css";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const Singer = (props) => {
  const { img, name, age, salary, country } = props.singer;
  console.log(props);
  return (
    <div className="container">
      <img className="img" src={img} alt="" />
      <h3>Singer:{name}</h3>
      <h4>Country:{country}</h4>
      <h4>Salary:${salary}</h4>
      <h4>Age:{age}</h4>
      <button className="button" onClick={() => props.handleCart(props.singer)}>
        Click Me
      </button>
      <div>
        <FaFacebookSquare className="icon" />
        <FaInstagram className="icon" />
        <FaTwitterSquare className="icon" />
      </div>
    </div>
  );
};

export default Singer;
