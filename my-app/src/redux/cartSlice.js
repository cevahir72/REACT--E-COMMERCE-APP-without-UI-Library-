import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],
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
        }else{
            const tempProducts = {...action.payload, cartQuantity:1}
            state.cartItems.push(tempProducts);
        }
        
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

       }
    }
})

export const { addToCart, getTotals} = cartSlice.actions

export default cartSlice.reducer