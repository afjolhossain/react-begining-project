import React from "react";
import header1 from "../../../img/image.jpg";
import header2 from "../../../img/header2.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-up-portion">
        <h1>Make Singers Team For A Concert</h1>
        <p>“Our sweetest songs are those of saddest thought.”</p>
        <h1>Total Budget-100 Million</h1>
      </div>
      <div className="header-container">
        <div>
          <img className="img-header" src={header1} alt="" />
        </div>
        <div>
          <img className="img-header" src={header2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
