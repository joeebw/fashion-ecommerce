import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { CartContext } from "../../context/cart.context";

function CartTotal() {
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="flex justify-end">
      <span className="text-2xl">TOTAL: ${totalPrice}</span>
    </div>
  )
}

export default CartTotal
