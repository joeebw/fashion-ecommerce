import {actionReducer} from '../../utils/action-reducer/action-reducer'
import {CART_ACTIONS_TYPE} from './cart.type'

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


export function setIsCartOpen(bool) {
  return actionReducer(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool);
}

export function addItemToCart(cartItems,productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return actionReducer(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}

export function decreaseItemToCart(cartItems,productToDecrease) {
  const newCartItems = decreaseCartItem(cartItems, productToDecrease);
  return actionReducer(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}

export function removeItemToCart(cartItems,productToRemove) {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return actionReducer(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}