import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Singer from "../singer/Singer";
import "./Singers.css";

const Singers = () => {
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("singers.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  const handleCart = (singer) => {
    const newCart = [...cart, singer];
    setCart(newCart);
  };

  return (
    <div className="singer-container">
      <div className="singers-container">
        {singers.map((singer) => (
          <Singer
            key={singer.id}
            singer={singer}
            handleCart={handleCart}
          ></Singer>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Singers;
