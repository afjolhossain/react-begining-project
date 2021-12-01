import React from "react";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const singer of cart) {
    total = total + singer.salary;
  }
  return (
    <div>
      <h1>Order Summary</h1>
      <h4>{props.cart.length}</h4>
      <h4>Total:{total}</h4>
    </div>
  );
};

export default Cart;
