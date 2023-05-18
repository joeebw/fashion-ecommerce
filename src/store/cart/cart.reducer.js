import { createSlice } from "@reduxjs/toolkit";

function addCartItem(cartItems, productToAdd) {
  const cartExists = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  console.log('cartItems' ,cartItems);
  // Check if the product exist if exist increases the quantity if not, add the product to cartItems.
  if (cartExists) {
    return cartItems.map(cartItem => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem)
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
  
  function decreaseCartItem(cartItems, productToDecrease) {
    let hasZeroQuantity = false;
    const newCartItems = cartItems.map(cartItem => {
      if (cartItem.id === productToDecrease.id) {
        hasZeroQuantity = productToDecrease.quantity === 1 ? true : false;
        return {...cartItem, quantity: cartItem.quantity - 1}
      } 
      return cartItem;
    })
    // Check if the quantity of the cartItem is zero if is zero remove from cartItems
    if (hasZeroQuantity) {
      return removeCartItem(cartItems, productToDecrease);
  }
  // If is not zero return the newCartItems 
  return newCartItems;
  
}

function removeCartItem(cartItems, productToRemove) {
  return cartItems.filter(cartItem => 
    cartItem.id !== productToRemove.id)
}

const  CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    decreaseItemToCart(state, action) {
      state.cartItems = decreaseCartItem(state.cartItems, action.payload)
    },
    removeItemToCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    
  }
})


export const {
  setIsCartOpen,
  addItemToCart,
  decreaseItemToCart,
  removeItemToCart
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;