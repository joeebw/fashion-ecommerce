import { useContext } from "react";
import Divider from "../divider/Divider.component";
import { CartContext } from "../../context/cart.context";

function CartEntryItem({cartItem}) {
  const {imageUrl, name, price, quantity} = cartItem;
  const {addItemToCart, removeItemToCart, decreaseItemToCart} = useContext(CartContext);

  // Increase the quantity of cartItem
  function handleIncreaseCartItem() {
    addItemToCart(cartItem);
  }

  // Remove cartItem from cart
  function handleRemoveCartItem() {
    removeItemToCart(cartItem);
  }

  return (
    <>
      <div className="grid grid-cols-5 justify-items-center items-center">
        <img src={imageUrl} alt={name} className="h-48" />
        <span>{name}</span>
        <div>
          <i 
            className="fa-solid fa-less-than text-xl pr-2 cursor-pointer"
            onClick={() => decreaseItemToCart(cartItem)}
          >
          </i>
          <span className="relative bottom-[1px] text-lg">{quantity}</span>
          <i 
            className="fa-solid fa-greater-than text-xl pl-2 cursor-pointer"
            onClick={handleIncreaseCartItem}
          >
          </i>
        </div>
        <span>${price}</span>
        <span>
          <i 
            className="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={handleRemoveCartItem}
          >
          </i>
        </span>
      </div>
      <Divider/>
    </>
      
)
}

export default CartEntryItem
