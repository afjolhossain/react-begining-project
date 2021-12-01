import React from "react";
import "./Footer.css";
import footerimg from "../../../img/footer-img.jpg";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="parent-container">
        <div className="about-us">
          <h5>ABOUT-US</h5>
          <li>
            A site designed to inspire, motivate, and encourage with popular
            concert arrengment.
          </li>
        </div>
        <div className="img-container">
          <img className="footer-img" src={footerimg} alt="" />
        </div>
        <div className="contact-details">
          <h5>Contact Details</h5>
          <li>Landphone:+88 22222455</li>
          <li>Phone:01741147274</li>
          <li>Email:geniousconcert@gmail.com</li>
          <li>Sylhet, Bangladesh</li>
        </div>
      </div>
      <div>
        <FaFacebookSquare className="icon" />
        <FaInstagram className="icon" />
        <FaTwitterSquare className="icon" />
      </div>
      <p>© 2021 genious-concert Ltd •</p>
    </div>
  );
};

export default Footer;
