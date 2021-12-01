import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Singers from "../singers/Singers";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Nav></Nav>
      <Header></Header>
      <Singers></Singers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
