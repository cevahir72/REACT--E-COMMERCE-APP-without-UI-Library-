import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {resetCart} from "../redux/cartSlice";
import "../style/Checkout.css"

const Checkout = () => {

  const cartItem = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch()

  return (
    <div className="checkout">
      <h1>Shopping Cart</h1>
      <div className="checkout-inner">
          <div className="chechout-inner-title">
            <div className="checkout-inner-title-A">
              <h2>Title</h2>
            </div>
            <div className="checkout-inner-title-B">
              <h2>Price</h2>
            </div>
            <div className="checkout-inner-title-B">
              <h2>Quantity</h2>
            </div>
            <div className="checkout-inner-title-B">
              <h2>Total</h2>
            </div>
          </div>
          {cartItem.map((item) => {
            return(
              <div className="cart-items-" key={item.id}>
              <div className="cart-items-A">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </div>
              <div className="cart-items-B">
                <h2>${item.price}</h2>
              </div>
              <div className="cart-items-B">
                <h2>{item.cartQuantity}</h2>
                <span>Remove</span>
              </div>
              <div className="cart-items-B">
                <h2>${item.cartQuantity * item.price}</h2>
              </div>
            </div>
            )
            
          })}
          <div className="cart-summary">
            <button onClick={()=>dispatch(resetCart())} className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>$TOTAL</span>
              </div>
              <p>Taxes and Shipping Calculated at checkout</p>
              <button>Check out</button>
              <div className="continiue-shopping">
                <Link to="/">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                  <span>Continiue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Checkout;
