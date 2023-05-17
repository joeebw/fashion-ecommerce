import { useDispatch } from "react-redux";
import { addItemToCart,decreaseItemToCart,removeItemToCart } from '../../store/cart/cart.reducer';
import { selectCartItems } from "../../store/cart/cart.selector";
import Divider from "../divider/Divider.component";

function CartEntryItem({cartItem}) {
  const dispatch = useDispatch();
  const {imageUrl, name, price, quantity} = cartItem;

  // Increase the quantity of cartItem
  function handleIncreaseCartItem() {
    dispatch(addItemToCart(cartItem));
  }

  function handleDecreaseCartItem() {
    dispatch(decreaseItemToCart(cartItem))
  }

  // Remove cartItem from cart
  function handleRemoveCartItem() {
    dispatch(removeItemToCart(cartItem));
  }

  return (
    <>
      <div className="grid grid-cols-5 justify-items-center items-center">
        <img src={imageUrl} alt={name} className="h-48" />
        <span>{name}</span>
        <div>
          <i 
            className="fa-solid fa-less-than text-xl pr-2 cursor-pointer"
            onClick={handleDecreaseCartItem}
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
