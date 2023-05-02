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

export function CartProvider({children}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  // This function sum the total items of the CartItems
  useEffect(() => {
    const newTotalItems = cartItems.reduce((total, cartItem) => 
      total += cartItem.quantity
    , 0);
    setTotalItems(newTotalItems);
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems, 
    addItemToCart, 
    totalItems
  }
  
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
