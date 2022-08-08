import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {resetCart, removeItem} from "../redux/cartSlice";
import "../style/Checkout.css"

const Checkout = () => {

  const cartItem = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state)=>state.cart.cartTotalAmount);

  const dispatch = useDispatch()

  const handleRemoveItem = (product)=> {
    dispatch(removeItem(product))
  }

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
                <div className="cart-items-A-inner">
                <span><h4>{item.title}</h4></span>
                <button onClick={()=>handleRemoveItem(item)}>Remove</button>
                </div>
              </div>
              <div className="cart-items-B">
                <h2>${item.price}</h2>
              </div>
              <div className="cart-items-B">
                <h2>{item.cartQuantity}</h2>
              </div>
              <div className="cart-items-B">
                <h2>${item.cartQuantity * item.price}</h2>
              </div>
            </div>
            )
            
          })}
          <div className="cart-summary">
            <div className="clear-cart">
            <button onClick={()=>dispatch(resetCart())} >Clear Cart</button>
            </div>
            <div className="cart-checkout">
              <div className="subtotal">
                <div className="subtotal-1"><h2>Subtotal</h2></div>
                <div className="subtotal-2"><h2>${cartTotal}</h2></div>
              </div>
              <p>Taxes and Shipping Calculated at checkout</p>
              <button className="checkout-button">Checkout</button>
              <div className="continiue-shopping">
                <Link to="/" style={{textDecoration:"none"}}>
                  <ion-icon  style={{textDecoration:"none"}} name="arrow-back-outline"></ion-icon>
                  <span>  Continiue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Checkout;
