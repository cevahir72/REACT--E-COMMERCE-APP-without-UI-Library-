import { createSlice } from '@reduxjs/toolkit';
import {toast} from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cartItems" ) ? JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        
       addToCart(state, action) {

        const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.id);
        if(itemIndex >= 0){ 
            state.cartItems[itemIndex].cartQuantity +=1
            toast.info(`increased ${state.cartItems[itemIndex].name} quantity`, {
                position:"bottom-left"
            });
        }else{
            const tempProducts = {...action.payload, cartQuantity:1}
            state.cartItems.push(tempProducts);
            toast.success(`added ${action.payload.name} to cart`, {
                position:"bottom-left"
            });
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        
       },
       getTotals(state,action){
        let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
              const { price, cartQuantity } = cartItem;
              const itemTotal = price * cartQuantity;
    
              cartTotal.total += itemTotal;
              cartTotal.quantity += cartQuantity;
    
              return cartTotal;
            },
            {
              total: 0,
              quantity: 0,
            }
          );

        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;

       },

       resetCart(state, action) {
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error("Cart cleared", { position: "bottom-left" })
       }

    }
})

export const { addToCart, getTotals, resetCart} = cartSlice.actions

export default cartSlice.reducer