import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartTotal() {
  const {totalPrice} = useContext(CartContext);

  return (
    <div className="flex justify-end">
      <span className="text-2xl">TOTAL: ${totalPrice}</span>
    </div>
  )
}

export default CartTotal
