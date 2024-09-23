import React from "react";
import Navbar from "../Movie/Cart/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../Movie/Cart/cartSlice";
import { useEffect } from "react";
import CartContainer from "../Movie/Cart/cartContainer";
import Modal from "../Movie/Cart/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
