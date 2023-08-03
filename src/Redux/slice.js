import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"


const initialState = {
  cartItems: [],
  cartQuantity: 0,
  // userStatus:"",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
 reducers:{
    add(state,action){
      // console.log(action.payload.title)
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const clonedProduct = JSON.parse(JSON.stringify(state.cartItems[itemIndex]));
        clonedProduct.cartQuantity += 1;
        state.cartItems[itemIndex] = clonedProduct;
        // console.log(state.cartItems.length)
        
        toast.info(`${action.payload.title} to cart`, { position: "bottom-left" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // console.log(state.cartItems.length)
        toast.success(`Successfully added ${action.payload.title} `, { position: "bottom-left" });
      }
      
    },
    
    decrement(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1; // Decrement the quantity for existing product
      }
      else {
        state.cartItems.splice(itemIndex, 1); // Remove the item from the cart if its quantity becomes 0
      }
  
    },
    increment(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
       // Increment the quantity for existing product
      }
    },
      remove(state,action){
       
      const idToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== idToRemove);
        localStorage.removeItem("cartItems", JSON.stringify(state.cartItems));
        toast.success(`Product Successfully removed  `, { position: "bottom-left" });

    },
    // LoggedIn(state,action){
    //   // console.log(action.payload);
    //   state.userStatus = action.payload;
    // }
   
    

}
});

export const { add, remove ,decrement,increment} = CartSlice.actions;

export default CartSlice.reducer;
