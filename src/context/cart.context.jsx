import { createContext, useEffect, useState } from "react";


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

export function CartProvider({children}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  function decreaseItemToCart(productToDecrease) {
    setCartItems(decreaseCartItem(cartItems, productToDecrease))
  }

  function removeItemToCart(productToRemove) {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  // This function sum the total items of the CartItems
  useEffect(() => {
    const newTotalItems = cartItems.reduce((total, cartItem) => 
      total += cartItem.quantity
    , 0);
    setTotalItems(newTotalItems);
  }, [cartItems])

  // This function makes the sum for the total price of the cart
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => 
      total += cartItem.price * cartItem.quantity
    , 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems])

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
