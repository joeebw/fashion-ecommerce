import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";

function CartTotal() {
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="flex justify-end">
      <span className="text-lg sm:text-2xl">TOTAL: ${totalPrice}</span>
    </div>
  )
}

export default CartTotal
