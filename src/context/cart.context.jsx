import { createContext, useEffect, useReducer, useState } from "react";
import { actionReducer } from "../utils/action-reducer/action-reducer";

export const CartContext  = createContext({
  isCartOpen: false,
  setIsCartOpen:() => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCartItems: () => {},
  totalItems: 0,
  setTotalItems: () => {}
})

function addCartItem(cartItems, productToAdd) {
  const cartExists = cartItems.find(cartItem => cartItem.id === productToAdd.id);
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

const  INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0
}

const CART_ACTIONS_TYPE = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN:'SET_IS_CART_OPEN' 
}

function cartReducer(state, actions) {
  const {type, payload} = actions;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error(`This type doesn't exist ${type}`) ;
  }
}

export function CartProvider({children}) {
  const [{isCartOpen, cartItems, totalItems, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  function addItemToCart(productToAdd) {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  }

  function decreaseItemToCart(productToDecrease) {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease);
    updateCartItems(newCartItems);
  }

  function removeItemToCart(productToRemove) {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItems(newCartItems);
  }

  function updateCartItems(newCartItems) {
    const newTotalItems = newCartItems.reduce((total, cartItem) => 
      total += cartItem.quantity
    , 0);

    const newTotalPrice = newCartItems.reduce((total, cartItem) => 
      total += cartItem.price * cartItem.quantity
    , 0);

    dispatch(
      actionReducer(CART_ACTIONS_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }))
  }

  function setIsCartOpen(bool) {
    dispatch(
      actionReducer(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool))
  }


  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems, 
    addItemToCart,
    decreaseItemToCart,
    removeItemToCart, 
    totalItems, 
    totalPrice
  }
  
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
